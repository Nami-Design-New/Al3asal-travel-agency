import { useState } from "react";
import { useTranslation } from "react-i18next";
import FilterFlights from "../components/filter/FilterFlights";
import SortingFilter from "../components/flights/SortingFilter";
import FlightDetails from "../ui/modals/FlightDetails";
import useGetTickets from "../hooks/useGetTickets";
import useSearchStore from "../stores/searchStore";
import FlightsLoader from "../ui/loaders/FlightsLoader";
import DepartFlights from "../components/flights/DepartFlights";
import ReturnFlights from "../components/flights/ReturnFlights";
import dayjs from "dayjs";

export default function Flights() {
  const { t } = useTranslation();
  const { flightsFilter } = useSearchStore();
  const [showReturnFlights, setShowReturnFlights] = useState(false);
  const [showFlightDetails, setShowFlightDetails] = useState(false);

  const { data, isLoading, isFetching } = useGetTickets();

  return (
    <section className="flights">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <FilterFlights />

            {flightsFilter.trip_type === "ROUND_TRIP" && (
              <div className="round_trip_flight">
                <div
                  className={`departing_flight ${
                    !showReturnFlights ? "active" : ""
                  }`}
                >
                  <div className="num">1</div>

                  <div className="content">
                    <h3>{t("flights.departing")}</h3>
                    <p>
                      {dayjs(flightsFilter.departure_date).format(
                        "ddd, DD MMM YYYY"
                      )}
                    </p>
                  </div>
                </div>
                <div className="shape"></div>
                <div
                  className={`return_flight  ${
                    showReturnFlights ? "active" : ""
                  }`}
                >
                  <div className="num">2</div>

                  <div className="content">
                    <h3>{t("flights.return")}</h3>
                    <p>
                      {dayjs(flightsFilter.return_date).format(
                        "ddd, DD MMM YYYY"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12 p-2">
            <div className="results">
              <SortingFilter />

              {!showReturnFlights && (
                <DepartFlights
                  flights={data?.departure_flights}
                  setShow={setShowFlightDetails}
                  setShowReturnFlights={setShowReturnFlights}
                />
              )}

              {flightsFilter.trip_type === "ROUND_TRIP" &&
                showReturnFlights && (
                  <ReturnFlights
                    flights={data?.return_flights}
                    setShow={setShowFlightDetails}
                  />
                )}

              {(isLoading || isFetching) && <FlightsLoader />}

              {!data && !isLoading && (
                <div className="no_flights_available">
                  <img src="/icons/no_flights.svg" alt="no-data" />
                  <h2>NO FLIGHTS FOUND!.</h2>
                  <p>
                    We couldn&apos;t find any flights. You can change your
                    search, remove filters, or check the calendar for available
                    dates.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <FlightDetails show={showFlightDetails} setShow={setShowFlightDetails} />
    </section>
  );
}

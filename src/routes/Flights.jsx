import { useState } from "react";
import { useTranslation } from "react-i18next";
import { mapApiFlightToUI } from "../utils/ticketsResponseMapper";
import FilterFlights from "../components/filter/FilterFlights";
import FlightCard from "../ui/cards/FlightCard";
import SortingFilter from "../components/flights/SortingFilter";
import FlightDetails from "../ui/modals/FlightDetails";
import useGetTickets from "../hooks/useGetTickets";
import useSearchStore from "../stores/searchStore";

export default function Flights() {
  const { t } = useTranslation();
  const { flightsFilter } = useSearchStore();
  const [showFlightDetails, setShowFlightDetails] = useState(false);

  const { data, isLoading, isFetching } = useGetTickets();

  const mappedFlights = data?.departure_flights?.map((apiFlight) =>
    mapApiFlightToUI(apiFlight)
  );

  return (
    <section className="flights">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <FilterFlights />

            {flightsFilter.trip_type === "ROUND_TRIP" && (
              <div className="round_trip_flight">
                <div className="departing_flight active">
                  <div className="num">1</div>

                  <div className="content">
                    <h3>{t("flights.departing")}</h3>
                    <p>Tue, 10 Jun 2025</p>
                  </div>
                </div>
                <div className="shape"></div>
                <div className="return_flight">
                  <div className="num">2</div>

                  <div className="content">
                    <h3>{t("flights.return")}</h3>
                    <p>Fri, 13 Jun 2025</p>
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

              {mappedFlights?.map((flight, index) => (
                <FlightCard
                  key={index}
                  flight={flight}
                  setShow={setShowFlightDetails}
                />
              ))}

              {(isLoading || isFetching) && <span>Loading ....</span>}
            </div>
          </div>
        </div>
      </div>

      <FlightDetails show={showFlightDetails} setShow={setShowFlightDetails} />
    </section>
  );
}

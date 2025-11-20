import { useState } from "react";
import FilterFlights from "../components/filter/FilterFlights";
// import SortingFilter from "../components/flights/SortingFilter";
import FlightDetails from "../ui/modals/FlightDetails";
import useGetTickets from "../hooks/useGetTickets";
import useSearchStore from "../stores/searchStore";
import FlightsLoader from "../ui/loaders/FlightsLoader";
import DepartFlights from "../components/flights/DepartFlights";
import ReturnFlights from "../components/flights/ReturnFlights";
import RoundTrip from "../components/flights/RoundTrip";

export default function Flights() {
  const { flightsFilter } = useSearchStore();
  const [showReturnFlights, setShowReturnFlights] = useState(false);
  const [showFlightDetails, setShowFlightDetails] = useState(false);

  const { data, isLoading } = useGetTickets();

  const isLoadingData = isLoading;

  return (
    <section className="flights">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <FilterFlights setShowReturnFlights={setShowReturnFlights} />

            <RoundTrip
              setShowReturnFlights={setShowReturnFlights}
              showReturnFlights={showReturnFlights}
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12 p-2">
            <div className="results">
              {/* <SortingFilter /> */}

              {/* Depart flights only when not loading */}
              {!showReturnFlights && !isLoadingData && (
                <DepartFlights
                  flights={data?.departure_flights}
                  setShow={setShowFlightDetails}
                  setShowReturnFlights={setShowReturnFlights}
                />
              )}

              {/* Return flights only when not loading */}
              {flightsFilter.trip_type === "ROUND_TRIP" &&
                showReturnFlights &&
                !isLoadingData && (
                  <ReturnFlights
                    flights={data?.return_flights}
                    setShow={setShowFlightDetails}
                  />
                )}

              {/* Loader */}
              {isLoadingData && <FlightsLoader />}

              {/* No results */}
              {!data && !isLoadingData && (
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

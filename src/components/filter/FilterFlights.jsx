import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import TripType from "./TripType";
import FlightDates from "./FlightDates";
import Travelers from "./Travelers";
import FromToAirport from "./FromToAirport";
import useGetTickets from "../../hooks/useGetTickets";
import useFlightsStore from "../../stores/flightsStore";

export default function FilterFlights({ setShowReturnFlights }) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const { refetch, isLoading } = useGetTickets(
    location.pathname === "/flights"
  );
  const { setReturnFlight, setDepartFlight } = useFlightsStore();

  const onSubmitFilter = async (e) => {
    e.preventDefault();

    if (location.pathname !== "/flights") {
      await navigate("/flights");
    }

    setDepartFlight({});
    setReturnFlight({});
    setShowReturnFlights(false);
    await refetch();
  };

  return (
    <form className="filter_container" onSubmit={onSubmitFilter}>
      <TripType />
      <div className="flight_specifications">
        <FromToAirport />
        <FlightDates />
        <Travelers />

        <button type="submit" className="search" disabled={isLoading}>
          {t("flights.search")}{" "}
          <i
            className={
              isLoading
                ? "fa-regular fa-circle-notch fa-spin"
                : "fa-light fa-magnifying-glass"
            }
          />
        </button>
      </div>
    </form>
  );
}

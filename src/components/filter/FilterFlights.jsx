import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import TripType from "./TripType";
import FlightDates from "./FlightDates";
import Travelers from "./Travelers";
import FromToAirport from "./FromToAirport";
import useGetTickets from "../../hooks/useGetTickets";

export default function FilterFlights() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { refetch, isFetching } = useGetTickets();

  const onSubmitFilter = async (e) => {
    e.preventDefault();

    if (location.pathname !== "/flights") {
      await navigate("/flights");
    }

    await refetch();
  };

  return (
    <form className="filter_container" onSubmit={onSubmitFilter}>
      <TripType />
      <div className="flight_specifications">
        <FromToAirport />
        <FlightDates />
        <Travelers />
        <button type="submit" className="search" disabled={isFetching}>
          {t("flights.search")} <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}

import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import TripType from "./TripType";
import FlightDates from "./FlightDates";
import Travelers from "./Travelers";
import FromToAirport from "./FromToAirport";

export default function FilterFlights() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmitFilter = (e) => {
    e.preventDefault();
    if (location.pathname !== "/flights") {
      navigate("/flights");
    }
  };

  return (
    <form className="filter_container" onSubmit={onSubmitFilter}>
      <TripType />

      <div className="flight_specifications">
        <FromToAirport />
        <FlightDates />
        <Travelers />

        <button type="submit" className="search">
          {t("flights.search")} <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}

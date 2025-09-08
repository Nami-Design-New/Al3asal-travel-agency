import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useSearchStore from "../../stores/searchStore";
import TripType from "./TripType";
import FlightDates from "./FlightDates";
import Travelers from "./Travelers";
import FromToAirport from "./FromToAirport";

export default function FilterFlights() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { flights_filter, setFlightsFilter } = useSearchStore();
  const [filterState, setFilterState] = useState(flights_filter);

  const handleChange = (key, value) => {
    setFilterState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSelectAirport = (direction, airport) => {
    setFilterState((prev) => ({
      ...prev,
      [`${direction}_airport`]: airport,
      [`${direction}_destination`]: {
        city: false,
        code: airport.iata_code,
      },
    }));
  };

  const onSubmitFilter = (e) => {
    e.preventDefault();
    setFlightsFilter(filterState);

    if (location.pathname !== "/flights") {
      navigate("/flights");
    }
  };

  return (
    <form className="filter_container" onSubmit={onSubmitFilter}>
      <TripType
        tripType={filterState.trip_type}
        cabinType={filterState.cabin_type}
        onChange={(key, value) => handleChange(key, value)}
      />

      <div className="flight_specifications">
        <FromToAirport handleSelectFromAirport={handleSelectAirport} />
        <FlightDates />
        <Travelers />

        <button type="submit" className="search">
          {t("flights.search")} <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}

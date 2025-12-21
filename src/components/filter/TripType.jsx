import { useTranslation } from "react-i18next";
import { flightLevels } from "./../../utils/constants";
import CheckField from "../../ui/forms/CheckField";
import useSearchStore from "../../stores/searchStore";
import useFlightsStore from "../../stores/flightsStore";
import { useSearchParams } from "react-router";

export default function TripType() {
  const { t } = useTranslation();
  const { flightsFilter, updateFilter } = useSearchStore();
  const { setReturnFlight } = useFlightsStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const airlines = JSON.parse(localStorage.getItem("airlines"));

  const handleSortChange = (e) => {
    const value = e.target.value; // asc | desc
    setSearchParams({ sort: value });
  };
  const handleFilterAirLine = (e) => {
    const value = e.target.value;

    const params = Object.fromEntries(searchParams.entries());

    if (value) {
      params.airline = value;
    } else {
      delete params.airline;
    }

    setSearchParams(params);
  };

  return (
    <div className="flight_type">
      <CheckField
        id="one-way"
        name="flight-type"
        text={t("flights.oneWay")}
        checked={flightsFilter.trip_type === "ONE_WAY"}
        onChange={() => {
          updateFilter({ trip_type: "ONE_WAY", return_date: "" });
          setReturnFlight({});
        }}
      />

      <CheckField
        id="round-trip"
        name="flight-type"
        text={t("flights.roundTrip")}
        checked={flightsFilter.trip_type === "ROUND_TRIP"}
        onChange={() => updateFilter({ trip_type: "ROUND_TRIP" })}
      />

      <select
        name="flight-level"
        id="flight-level"
        className="flights_level"
        value={flightsFilter.cabin_type || "ECONOMY"}
        onChange={(e) => updateFilter({ cabin_type: e.target.value })}
      >
        {flightLevels.map((l) => (
          <option value={l} key={l}>
            {t(`flights.${l}`)}
          </option>
        ))}
      </select>

      <select className="flights_level" onChange={handleFilterAirLine}>
        <option value=""> {t("flights.select_country")}</option>
        {airlines?.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      <select className="flights_level" onChange={handleSortChange}>
        <option value=""> {t("flights.sort_by_price")}</option>
        <option value="desc"> {t("flights.price_high_to_low")}</option>
        <option value="asc"> {t("flights.price_low_to_high")}</option>
      </select>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { flightLevels } from "./../../utils/constants";
import CheckField from "../../ui/forms/CheckField";
import useSearchStore from "../../stores/searchStore";
import useFlightsStore from "../../stores/flightsStore";
import { useSearchParams } from "react-router";

export default function TripType() {
  const { flightsFilter, updateFilter } = useSearchStore();
  const { setReturnFlight } = useFlightsStore();
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();

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
  const airlines = JSON.parse(localStorage.getItem("airlines"));

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
        <option value=""> ترتيب حسب الدوله </option>
        {airlines?.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <select className="flights_level" onChange={handleSortChange}>
        <option value=""> ترتيب حسب السعر </option>
        <option value="desc">السعر: من الأعلى إلى الأقل</option>
        <option value="asc">السعر: من الأقل إلى الأعلى</option>
      </select>
    </div>
  );
}

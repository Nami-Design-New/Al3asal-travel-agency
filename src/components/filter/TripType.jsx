import { useTranslation } from "react-i18next";
import { flightLevels } from "./../../utils/constants";
import CheckField from "../../ui/forms/CheckField";
import useSearchStore from "../../stores/searchStore";
import useFlightsStore from "../../stores/flightsStore";

export default function TripType() {
  const { flightsFilter, updateFilter } = useSearchStore();
  const { setReturnFlight } = useFlightsStore();

  const { t } = useTranslation();

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
    </div>
  );
}

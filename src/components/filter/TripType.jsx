import { useTranslation } from "react-i18next";
import { flightLevels } from "./../../utils/constants";
import CheckField from "../../ui/forms/CheckField";

export default function TripType({ tripType, cabinType, onChange }) {
  const { t } = useTranslation();

  return (
    <div className="flight_type">
      <CheckField
        id="one-way"
        name="flight-type"
        text={t("flights.oneWay")}
        checked={tripType === "ONE_WAY"}
        onChange={() => onChange("trip_type", "ONE_WAY")}
      />

      <CheckField
        id="round-trip"
        name="flight-type"
        text={t("flights.roundTrip")}
        checked={tripType === "ROUND_TRIP"}
        onChange={() => onChange("trip_type", "ROUND_TRIP")}
      />

      <select
        name="flight-level"
        id="flight-level"
        value={cabinType || "ECONOMY"}
        onChange={(e) => onChange("cabin_type", e.target.value)}
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

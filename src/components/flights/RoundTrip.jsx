import dayjs from "dayjs";
import useSearchStore from "../../stores/searchStore";
import { useTranslation } from "react-i18next";

export default function RoundTrip({ setShowReturnFlights, showReturnFlights }) {
  const { flightsFilter } = useSearchStore();
  const { t } = useTranslation();

  return (
    <>
      {flightsFilter.trip_type === "ROUND_TRIP" && (
        <div
          className="round_trip_flight"
          onClick={() => setShowReturnFlights(false)}
        >
          <div
            className={`departing_flight ${!showReturnFlights ? "active" : ""}`}
          >
            <div className="num">1</div>

            <div className="content">
              <h3>{t("flights.departing")}</h3>
              <p>
                {dayjs(flightsFilter.departure_date).format("ddd, DD MMM YYYY")}
              </p>
            </div>
          </div>

          <div
            className={`center_devider ${showReturnFlights ? "active" : ""}`}
          >
            <span></span>
          </div>

          <div
            className={`return_flight  ${showReturnFlights ? "active" : ""}`}
          >
            <div className="num">2</div>

            <div className="content">
              <h3>{t("flights.return")}</h3>
              <p>
                {dayjs(flightsFilter.return_date).format("ddd, DD MMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

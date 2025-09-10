import { Dropdown } from "react-bootstrap";
import { ar, enUS } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange, Calendar } from "react-date-range";
import useSearchStore from "../../stores/searchStore";
import useSettingsStore from "./../../stores/settingsStore";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function FlightDates() {
  const { t } = useTranslation();
  const { lang } = useSettingsStore();
  const { flightsFilter, updateFilter } = useSearchStore();

  const [dateRange, setDateRange] = useState([
    {
      startDate: flightsFilter.departure_date
        ? new Date(flightsFilter.departure_date)
        : new Date(),
      endDate: flightsFilter.return_date
        ? new Date(flightsFilter.return_date)
        : new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (item) => {
    setDateRange([item.selection]);

    if (flightsFilter.trip_type === "ONE_WAY") {
      updateFilter({
        departure_date: format(item.selection.startDate, "yyyy-MM-dd"),
        return_date: "",
      });
    } else {
      updateFilter({
        departure_date: format(item.selection.startDate, "yyyy-MM-dd"),
        return_date: format(item.selection.endDate, "yyyy-MM-dd"),
      });
    }
  };

  const handleOneWayChange = (date) => {
    updateFilter({
      departure_date: format(date, "yyyy-MM-dd"),
      return_date: "",
    });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle className="filter_btn">
        <i className="fa-light fa-calendar"></i>
        <p className="d-flex flex-column m-0 align-items-start">
          <span
            className={
              flightsFilter.departure_date || flightsFilter.return_date
                ? "sm_title"
                : ""
            }
          >
            {flightsFilter.trip_type === "ONE_WAY"
              ? t("flights.select_departure")
              : t("flights.select_departure_return")}
          </span>

          {flightsFilter.trip_type === "ROUND_TRIP" &&
            flightsFilter.departure_date &&
            flightsFilter.return_date && (
              <span>
                {`${format(
                  new Date(flightsFilter.departure_date),
                  "dd MMM"
                )} - ${format(
                  new Date(flightsFilter.return_date),
                  "dd MMM yyyy"
                )}`}
              </span>
            )}

          {flightsFilter.trip_type === "ONE_WAY" &&
            flightsFilter.departure_date && (
              <span>
                {format(new Date(flightsFilter.departure_date), "dd MMM yyyy")}
              </span>
            )}
        </p>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dates_menu">
        <div className="calender_wrapper">
          <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
            {flightsFilter.trip_type === "ONE_WAY" ? (
              <Calendar
                date={
                  flightsFilter.departure_date
                    ? new Date(flightsFilter.departure_date)
                    : new Date()
                }
                onChange={handleOneWayChange}
                locale={lang === "en" ? enUS : ar}
                minDate={new Date()}
                color="#0d6efd"
              />
            ) : (
              <DateRange
                editableDateInputs={true}
                onChange={handleChange}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                locale={lang === "en" ? enUS : ar}
                months={2}
                direction="horizontal"
                showDateDisplay={false}
                rangeColors={["#0d6efd"]}
              />
            )}
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

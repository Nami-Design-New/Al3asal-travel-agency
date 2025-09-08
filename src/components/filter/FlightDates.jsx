import { Dropdown } from "react-bootstrap";

export default function FlightDates() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="filter_btn">
        <i className="fa-light fa-calendar"></i>
        <span>14 May - 28 June</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="travelers_menu">
        <div className="calender_wrapper">
          {/* <Calendar
                numberOfMonths={flightType === "round-trip" ? 2 : 1}
                value={
                  flightType === "round-trip"
                    ? [new Date(), new Date()]
                    : new Date()
                }
                minDate={new Date()}
                range={flightType === "round-trip"}
              /> */}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

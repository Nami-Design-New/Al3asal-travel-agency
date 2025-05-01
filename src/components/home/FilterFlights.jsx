import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { flightLevels } from "../../utils/constants";
import { Calendar } from "react-multi-date-picker";
import Select from "react-select";
import CheckField from "../../ui/forms/CheckField";

export default function FilterFlights() {
  const { t } = useTranslation();

  return (
    <form className="filter_container">
      <div className="flight_type">
        <CheckField
          id="one-way"
          name="flight-type"
          text={t("flights.oneWay")}
          checked={true}
        />

        <CheckField
          id="round-trip"
          name="flight-type"
          text={t("flights.roundTrip")}
        />

        <Select
          aria-label="choose a group"
          className="basic-single"
          classNamePrefix="select"
          isSearchable={false}
          placeholder={"choose"}
          defaultValue={{
            value: flightLevels[0],
            label: t(`flights.${flightLevels[0]}`),
          }}
          options={flightLevels.map((level) => ({
            value: level,
            label: t(`flights.${level}`),
          }))}
        />
      </div>

      <div className="flight_specifications">
        <div className="from_to">
          <Dropdown>
            <Dropdown.Toggle className="filter_btn">
              <i className="fa-regular fa-location-dot"></i>
              <span>{t("flights.leavingFrom")}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="places_menu">
              <div className="places_menu_content">
                <input type="text" placeholder={t("flights.leavingFrom")} />

                <div className="list_ariports">
                  {Array.from({ length: 5 }, (_, index) => (
                    <button key={index}>
                      <i className="fa-regular fa-plane"></i>
                      <div className="content">
                        <h6>Cairo (CAI - Cairo Intl.)</h6> <p>Egypt</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <button className="swap_button" type="button">
            <i className="fa-regular fa-arrow-right-arrow-left"></i>
          </button>

          <Dropdown>
            <Dropdown.Toggle className="filter_btn">
              <i className="fa-regular fa-location-dot"></i>
              <span>{t("flights.goingTo")}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="places_menu">
              <div className="places_menu_content">
                <input type="text" placeholder={t("flights.goingTo")} />
                <h6>
                  <i className="fa-regular fa-magnifying-glass-location"></i>{" "}
                  {t("flights.searchByCityOrAirPort")}
                </h6>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Dropdown>
          <Dropdown.Toggle className="filter_btn">
            <i className="fa-light fa-calendar"></i>
            <span>14 May - 28 June</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="travelers_menu">
            <div className="calender_wrapper">
              <Calendar numberOfMonths={2} minDate={new Date()} />
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle className="filter_btn">
            <i className="fa-light fa-user"></i>
            <span>{t("flights.travelers")}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="travelers_menu">
            <div className="travelers_menu_content">
              <div className="section">
                <h6>{t("flights.adults")}</h6>

                <div className="btns">
                  <button type="button" className="btn">
                    <i className="fa-regular fa-minus"></i>
                  </button>

                  <div className="num"> 1 </div>

                  <button type="button" className="btn">
                    <i className="fa-regular fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="section">
                <h6>
                  {t("flights.children")} <strong>(2-11 years)</strong>
                </h6>

                <div className="btns">
                  <button type="button" className="btn">
                    <i className="fa-regular fa-minus"></i>
                  </button>

                  <div className="num"> 1 </div>

                  <button type="button" className="btn">
                    <i className="fa-regular fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="section">
                <h6>
                  {t("flights.infants")} <strong>(under 2 years)</strong>
                </h6>

                <div className="btns">
                  <button type="button" className="btn">
                    <i className="fa-regular fa-minus"></i>
                  </button>

                  <div className="num"> 1 </div>

                  <button type="button" className="btn">
                    <i className="fa-regular fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <button type="submit" className="search">
          {t("flights.search")} <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}

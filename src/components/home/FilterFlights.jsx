import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { flightLevels } from "../../utils/constants";
import Select from "react-select";
import DateCalender from "../../ui/modals/DateCalender";

export default function FilterFlights() {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [filterData, setFilterData] = useState({
    flightType: "one-way",
  });

  return (
    <form className="flights_filter">
      <div className="flight_type">
        <label htmlFor="one-way">
          <input
            type="radio"
            id="one-way"
            name="flight-type"
            value="one-way"
            checked={filterData.flightType === "one-way"}
            onChange={(e) =>
              setFilterData({ ...filterData, flightType: e.target.value })
            }
          />
          <span>{t("flights.oneWay")}</span>
        </label>

        <label htmlFor="round-trip">
          <input
            type="radio"
            id="round-trip"
            name="flight-type"
            value="round-trip"
            checked={filterData.flightType === "round-trip"}
            onChange={(e) =>
              setFilterData({ ...filterData, flightType: e.target.value })
            }
          />
          <span>{t("flights.roundTrip")}</span>
        </label>

        <Select
          aria-label="choose a group"
          className="basic-single"
          classNamePrefix="select"
          isSearchable={false}
          placeholder={"choose"}
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
                <h6>
                  <i className="fa-regular fa-magnifying-glass-location"></i>{" "}
                  {t("flights.searchByCityOrAirPort")}
                </h6>
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

        <div className="filter_btn" onClick={() => setShowModal(true)}>
          <i className="fa-light fa-calendar"></i>
          <span>14 May - 28 June</span>
        </div>

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
          {t("flights.search")}
        </button>
      </div>

      <DateCalender showModal={showModal} setShowModal={setShowModal} />
    </form>
  );
}

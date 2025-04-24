import { useState } from "react";
import { useTranslation } from "react-i18next";
import { flightLevels } from "../../utils/constants";
import { Dropdown } from "react-bootstrap";
import Select from "react-select";

export default function HeroSection() {
  const { t } = useTranslation();

  const [filterData, setFilterData] = useState({
    flightType: "one-way",
  });

  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_text">
          <h1>{t("home.welcome")}</h1>
          <p>{t("home.description")}</p>
        </div>

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
              {/* origin select */}
              <Dropdown>
                <Dropdown.Toggle className="filter_btn">
                  <i className="fa-regular fa-location-dot"></i>
                  <span>{t("flights.leavingFrom")}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu></Dropdown.Menu>
              </Dropdown>

              {/* swap button */}
              <button className="swap_button" type="button">
                <i className="fa-regular fa-arrow-right-arrow-left"></i>
              </button>

              {/* destination select */}
              <Dropdown>
                <Dropdown.Toggle className="filter_btn">
                  <i className="fa-regular fa-location-dot"></i>
                  <span>{t("flights.goingTo")}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu></Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="filter_btn">
              <i className="fa-light fa-calendar"></i>
              <span>14 May - 28 June</span>
            </div>

            <Dropdown>
              <Dropdown.Toggle className="filter_btn">
                <i className="fa-light fa-user"></i>
                <span>{t("flights.travelers")}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu></Dropdown.Menu>
            </Dropdown>

            <button type="submit" className="search">
              {t("flights.search")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

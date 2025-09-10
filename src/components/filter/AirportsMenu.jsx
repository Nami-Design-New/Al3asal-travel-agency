import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDebounce } from "../../hooks/useDebounce";
import { useState, useRef, useEffect } from "react";
import useGetAirports from "../../hooks/useGetAirports";
import useSearchStore from "../../stores/searchStore";

export default function AirportsMenu({ direction }) {
  const listRef = useRef(null);
  const { t } = useTranslation();
  const { flightsFilter, updateFilter } = useSearchStore();

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();
  const [selectedAirPort, setSelectedAirPort] = useState({});

  useEffect(() => {
    setSelectedAirPort(flightsFilter[`${direction}_airport`] || {});
    setSearch(flightsFilter[`${direction}_airport`]?.name || "");
  }, [direction, flightsFilter]);

  const debouncedSearch = useDebounce(search, 500);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAirports(debouncedSearch);

  // fetch airports on scroll
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const handleScroll = () => {
      if (
        list.scrollTop + list.clientHeight >= list.scrollHeight - 50 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    list.addEventListener("scroll", handleScroll);
    return () => list.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // choose airport
  const handleSelect = (airport) => {
    setSelectedAirPort(airport);
    setSearch(airport.name);

    updateFilter({
      [`${direction}_airport`]: airport,
      [`${direction}_destination`]: {
        city: false,
        code: airport.iata_code,
      },
    });

    setShow(false);
  };

  return (
    <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
      <Dropdown.Toggle className="filter_btn" onClick={() => setShow(!show)}>
        <i className="fa-regular fa-location-dot"></i>
        <p className="d-flex flex-column m-0 align-items-start">
          <span className={selectedAirPort?.iata_code ? "sm_title" : ""}>
            {direction === "from"
              ? t("flights.leavingFrom")
              : t("flights.goingTo")}
          </span>

          {selectedAirPort?.iata_code && (
            <span>
              {selectedAirPort.city.name}, {selectedAirPort.country.name}, (
              {selectedAirPort.iata_code})
            </span>
          )}
        </p>
      </Dropdown.Toggle>

      <Dropdown.Menu className="places_menu">
        <div className="places_menu_content">
          {selectedAirPort.iata_code && (
            <button
              className="clear_btn"
              type="button"
              onClick={() => setSearch("")}
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
          )}
          <input
            type="text"
            name="search"
            id="search"
            placeholder={
              direction === "from"
                ? t("flights.leavingFrom")
                : t("flights.goingTo")
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div
            className="list_ariports"
            ref={listRef}
            style={{ maxHeight: "250px", overflowY: "auto" }}
          >
            {data.map((airport) => (
              <button
                key={airport?.id}
                type="button"
                onClick={() => handleSelect(airport)}
              >
                <i className="fa-regular fa-plane"></i>
                <div className="content">
                  <h6>{airport?.name}</h6>
                  <p>{airport?.country?.name}</p>
                </div>
              </button>
            ))}

            {isFetchingNextPage && <p className="loading">Loading more...</p>}
          </div>

          {data.length === 0 && !isFetchingNextPage && (
            <div className="places_menu_content">
              <h6>
                <i className="fa-regular fa-magnifying-glass-location"></i>{" "}
                {t("flights.searchByCityOrAirPort")}
              </h6>
            </div>
          )}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

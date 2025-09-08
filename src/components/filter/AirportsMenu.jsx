import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import useGetAirports from "./hooks/useGetAirports";

export default function AirportsMenu({ direction, handleSelectAirport }) {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAirports(search);

  const listRef = useRef(null);

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

  return (
    <Dropdown>
      <Dropdown.Toggle className="filter_btn">
        <i className="fa-regular fa-location-dot"></i>
        <span>
          {direction === "from"
            ? t("flights.leavingFrom")
            : t("flights.goingTo")}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="places_menu">
        <div className="places_menu_content">
          <input
            type="text"
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
                onClick={() => handleSelectAirport(direction, airport)}
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

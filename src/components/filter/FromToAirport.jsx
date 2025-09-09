import AirportsMenu from "./AirportsMenu";
import useSearchStore from "../../stores/searchStore";
import { useState } from "react";

export default function FromToAirport() {
  const { flightsFilter, updateFilter } = useSearchStore();
  const [isRotated, setIsRotated] = useState(false);

  const handleSwapAirPorts = () => {
    const fromAirport = flightsFilter.from_airport || {};
    const toAirport = flightsFilter.to_airport || {};

    setIsRotated((prev) => !prev);

    updateFilter({
      from_airport: toAirport,
      to_airport: fromAirport,
      from_destination: {
        city: false,
        code: toAirport?.iata_code || "",
      },
      to_destination: {
        city: false,
        code: fromAirport?.iata_code || "",
      },
    });
  };

  return (
    <div className="from_to">
      <AirportsMenu direction="from" />

      <button
        className="swap_button"
        type="button"
        onClick={handleSwapAirPorts}
      >
        <i
          className="fa-regular fa-arrow-right-arrow-left"
          style={{
            transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.5s ease",
          }}
        ></i>
      </button>

      <AirportsMenu direction="to" />
    </div>
  );
}

import AirportsMenu from "./AirportsMenu";
import useSearchStore from "../../stores/searchStore";

export default function FromToAirport() {
  const { flightsFilter, updateFilter } = useSearchStore();

  const handleSwapAirPorts = () => {
    const fromAirport = flightsFilter.from_airport || {};
    const toAirport = flightsFilter.to_airport || {};

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
        <i className="fa-regular fa-arrow-right-arrow-left"></i>
      </button>

      <AirportsMenu direction="to" />
    </div>
  );
}

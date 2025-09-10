import useFlightsStore from "../../stores/flightsStore";
import useSearchStore from "../../stores/searchStore";
import FlightCard from "../../ui/cards/FlightCard";

export default function DepartFlights({
  flights,
  setShow,
  setShowReturnFlights,
}) {
  const { setDepartFlight } = useFlightsStore();
  const { flightsFilter } = useSearchStore();

  const handleSelect = (flight) => {
    if (flightsFilter.trip_type === "ONE_WAY") {
      setShow(true);
    } else {
      setShowReturnFlights(true);
    }

    setDepartFlight(flight);
  };

  return (
    <>
      {flights?.map((flight) => (
        <FlightCard
          key={flight?.package_info?.package_key}
          flight={flight}
          handleSelect={handleSelect}
        />
      ))}
    </>
  );
}

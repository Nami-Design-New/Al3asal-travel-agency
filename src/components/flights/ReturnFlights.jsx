import useFlightsStore from "../../stores/flightsStore";
import FlightCard from "../../ui/cards/FlightCard";

export default function ReturnFlights({ flights, setShow }) {
  const { setReturnFlight } = useFlightsStore();

  const handleSelect = (flight) => {
    setReturnFlight(flight);
    setShow(true);
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

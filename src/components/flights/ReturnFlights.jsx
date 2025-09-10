import FlightCard from "../../ui/cards/FlightCard";

export default function ReturnFlights({ flights, setShowFlightDetails }) {
  return (
    <>
      {flights?.map((flight, index) => (
        <FlightCard
          key={index}
          flight={flight}
          setShow={setShowFlightDetails}
        />
      ))}
    </>
  );
}

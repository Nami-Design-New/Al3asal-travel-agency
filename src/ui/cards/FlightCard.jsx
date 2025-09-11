import TicketTimeLine from "./TicketTimeLine";
import TicketsAirLine from "./TicketsAirLine";

export default function FlightCard({ flight, handleSelect }) {
  const fare = flight.fares[0]?.fare_info?.fare_detail;
  const totalPrice = fare?.price_info?.total_fare || 0;

  return (
    <div className="flight_card" onClick={() => handleSelect(flight)}>
      <div className="flight_info">
        <TicketsAirLine flight={flight} />
        <TicketTimeLine flight={flight} />
      </div>

      <div className="price">
        <h5>
          {totalPrice} <span>USD</span>
        </h5>
      </div>
    </div>
  );
}

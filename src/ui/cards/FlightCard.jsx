import TicketTimeLine from "./TicketTimeLine";
import TicketsAirLine from "./TicketsAirLine";

export default function FlightCard({ flight, setShow }) {
  return (
    <div className="flight_card" onClick={() => setShow(true)}>
      <div className="flight_info">
        <TicketsAirLine flight={flight} />
        <TicketTimeLine flight={flight} />
      </div>

      <div className="price">
        <h5>
          {flight?.price} <span>USD / Person</span>
        </h5>
      </div>
    </div>
  );
}

import TicketTimeLine from "./TicketTimeLine";
import TicketsAirLine from "./TicketsAirLine";
// import TicketDuration from "./TicketDuration";

export default function FlightCard({ flight, setShow }) {
  return (
    <div className="flight_card" onClick={() => setShow(true)}>
      <div className="flight_info">
        <TicketsAirLine flight={flight} />
        <TicketTimeLine flight={flight} />
        {/* <TicketDuration flight={flight} /> */}
      </div>

      <div className="price">
        <h5>
          {flight?.price} <span>USD</span>
        </h5>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import TicketTimeLine from "./TicketTimeLine";
import TicketsAirLine from "./TicketsAirLine";
import TicketDuration from "./TicketDuration";

export default function FlightCard({ flight }) {
  return (
    <Link to="/checkout" className="flight_card">
      <div className="flight_info">
        <TicketsAirLine flight={flight} />
        <TicketTimeLine flight={flight} />
        <TicketDuration flight={flight} />
      </div>

      <div className="price">
        <h5>
          {flight?.price} <span>EGP</span>
        </h5>
      </div>
    </Link>
  );
}

import { useState } from "react";
import TicketTimeLine from "./TicketTimeLine";
import TicketsAirLine from "./TicketsAirLine";
import TicketDuration from "./TicketDuration";
import FlightDetails from "../modals/FlightDetails";

export default function FlightCard({ flight }) {
  const [showFlightDetails, setShowFlightDetails] = useState(false);

  return (
    <div className="flight_card" onClick={() => setShowFlightDetails(true)}>
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

      <FlightDetails show={showFlightDetails} setShow={setShowFlightDetails} />
    </div>
  );
}

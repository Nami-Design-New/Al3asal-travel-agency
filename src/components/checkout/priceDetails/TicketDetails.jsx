import AirlinesLogos from "./AirlinesLogos";
import FareBreakdown from "./FareBreakdown";

export default function TicketDetails({ title, flight, fares }) {
  const firstLeg = flight?.legs?.[0];
  const lastLeg = flight?.legs?.[flight?.legs?.length - 1];
  const airlines = [
    ...new Set(flight?.legs?.map((leg) => leg?.airline_info?.carrier_code)),
  ];

  return (
    <div className="ticket_details">
      <div className="flight">
        <div className="path">
          <h6>{title}</h6>
          <h5>
            {firstLeg?.departure_info?.airport_code}{" "}
            <i className="fa-regular fa-arrow-right-long"></i>{" "}
            {lastLeg?.arrival_info?.airport_code}
          </h5>
        </div>

        <AirlinesLogos airlines={airlines} />
      </div>

      <FareBreakdown fares={fares} />
    </div>
  );
}

import useGetSettings from "../../hooks/useGetSettings";
import TicketTimeLine from "./TicketTimeLine";
import TicketsAirLine from "./TicketsAirLine";

export default function FlightCard({ flight, handleSelect }) {
  const fare = flight.fares[0]?.fare_info?.fare_detail;
  const totalPrice = fare?.price_info?.total_fare || 0;
  const { data: settings } = useGetSettings();

  const profitPercentage = settings?.profit_percentage;
  const finalPrice = Number(totalPrice) + Number(totalPrice) * Number(profitPercentage) / 100;

  return (
    <div className="flight_card" onClick={() => handleSelect(flight)}>
      <div className="flight_info">
        <TicketsAirLine flight={flight} />
        <TicketTimeLine flight={flight} />
      </div>

      <div className="price">
        <h5>
          {finalPrice.toFixed(2)} <span>USD</span>
        </h5>
      </div>
    </div>
  );
}

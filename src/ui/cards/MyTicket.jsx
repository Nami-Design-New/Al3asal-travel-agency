export default function MyTicket({ trip, setShow }) {
  return (
    <div key={trip.id} className="trip-card" onClick={() => setShow(true)}>
      <div className="trip-card__top">
        <div>
          <i className="fa-regular fa-location-dot"></i>
          {trip.from} → {trip.to}
        </div>
        <div className="trip-card__price">{trip.price}</div>
      </div>

      <div className="trip-card__times">
        <div>
          <i className="fa-regular fa-plane-departure"></i>
          <strong>{trip.departureTime}</strong>
        </div>
        <div className="trip-card__duration">
          <i className="fa-regular fa-plane"></i>
          <span>{trip.duration}</span> | <span>{trip.stops}</span>
        </div>
        <div>
          <i className="fa-regular fa-plane-arrival"></i>
          <strong>{trip.arrivalTime}</strong>
        </div>
      </div>

      <div className="trip-card__details">
        <div>
          <i className="fa-regular fa-calendar-days"></i> {trip.date}
        </div>
        <div>
          <i className="fa-regular fa-user-group"></i> {trip.passengers}{" "}
          passengers
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import { useTranslation } from 'react-i18next';

const TripCard = ({ trip }) => {
      const { t } = useTranslation();
    
  return (
    <div className="trip-card">
      <div className="card-content">
        <div className="trip-details">
          <h3 className="destination">{trip.destination}</h3>
          <p className="trip-date mt-1">
            <i className="fa-solid fa-calendar-days m-1"></i>
            {trip.date}
          </p>

          <div className="flight-section">
            <h5>ذهاب</h5>
            <div className="flight-info">
              <p className="airline">
                <i className="fa-solid fa-plane-departure mx-2"></i>
                {trip.airline} - {trip.route}
              </p>
              <p className="flight-time">
                <i className="fa-solid fa-clock mx-2"></i>
                {trip.departure} - {trip.arrival}
              </p>
            </div>
          </div>

          <div className="flight-section">
            <h5>عودة</h5>
            <div className="flight-info">
              <p className="airline">
                <i className="fa-solid fa-plane-arrival mx-2"></i>
                {trip.airline} - {trip.returnRoute}
              </p>
              <p className="flight-time">
                <i className="fa-solid fa-clock mx-2"></i>
                {trip.returnDeparture} - {trip.returnArrival}
              </p>
            </div>
          </div>
        </div>

        <div className="price-section">
          <div className="price-info">
            <h4 className="price">{trip.price}</h4>
            <p className="price-label">Round trip per traveler</p>
          </div>
          <Link to="/edit-trip" className="customBtn">
          {t('myTrips.editBtn')}

          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;

import { Link } from "react-router";
import { useTranslation } from 'react-i18next';
import TripCard from '../ui/cards/TripCard'; 

const MyTrips = () => {
  const { t } = useTranslation();
  // const trips = [];

  const trips = [
    {
      id: 1,
      destination: 'Luxor',
      date:"May 19 - May 21",
      airline: 'Egyptair',
      departure: 'May 19, 12:30am',
      arrival: 'May 19, 1:35am',
      route: 'Cairo (CAI) - Luxor (LXR)',
      returnDeparture: 'May 21, 6:30am',
      returnArrival: 'May 21, 7:40am',
      returnRoute: 'Luxor (LXR) - Cairo (CAI)',
      price: '$283',
      travelers: 1
    },
    {
      id: 2,
      destination: 'Luxor',
      date:"May 19 - May 21",
      airline: 'Egyptair',
      departure: 'May 19, 12:30am',
      arrival: 'May 19, 1:35am',
      route: 'Cairo (CAI) - Luxor (LXR)',
      returnDeparture: 'May 21, 6:30am',
      returnArrival: 'May 21, 7:40am',
      returnRoute: 'Luxor (LXR) - Cairo (CAI)',
      price: '$283',
      travelers: 1
    }
  ];

  return (
    <div className="container my-trips">
      <div className="header-row">
        <div className="header-col">
          <h2>{t('myTrips.title')}</h2>
        </div>
      </div>

      {trips.length > 0 ? (
        <div className="trips-row">
          {trips.map((trip) => (
            <div key={trip.id} className="trip-card-container">
              <TripCard trip={trip} />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-trips-container">
          <div className="no-trips-content">
            <img 
              src="/icons/notrip.svg" 
              alt="No trips yet" 
              className="no-trips-image"
            />
            <h3>{t('myTrips.noTripsTitle')}</h3>
            <p className="no-trips-message">{t('myTrips.noTripsMessage')}</p>
            <Link to="/" className="customBtn">
              {t('myTrips.searchBtn')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTrips;

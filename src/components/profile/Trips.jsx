import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Trips() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("upcoming");

  const trips = [
    {
      id: 1,
      from: "TBS",
      to: "AMS",
      departureTime: "04:55",
      arrivalTime: "09:35",
      duration: "6h 40",
      stops: "1 stop",
      price: "890$",
      date: "2025-06-15",
      passengers: 2,
      status: "upcoming",
    },
    {
      id: 2,
      from: "AMS",
      to: "TBS",
      departureTime: "19:45",
      arrivalTime: "04:00",
      duration: "6h 15",
      stops: "1 stop",
      price:" 790$",
      date: "2025-07-20",
      passengers: 1,
      status: "upcoming",
    },
  ];

  const renderContent = () => {
    const filteredTrips = trips.filter((trip) => trip.status === activeTab);

    if (filteredTrips.length === 0) {
      return <div className="no-data">{t("profile.noData")}</div>;
    }

    return (
      <div className="trip-list">
        {filteredTrips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <div className="trip-card__top">
              <div>
                <i className="fa-solid fa-location-dot"></i>
                {trip.from} → {trip.to}
              </div>
              <div className="trip-card__price">
               {trip.price}
              </div>
            </div>

            <div className="trip-card__times">
              <div>
                <i className="fa-solid fa-plane-departure"></i>
                <strong>{trip.departureTime}</strong>
              </div>
              <div className="trip-card__duration">
                <i className="fa-solid fa-plane"></i>
                <span>{trip.duration}</span> | <span>{trip.stops}</span>

               
              </div>
              <div>
                <i className="fa-solid fa-plane-arrival"></i>
                <strong>{trip.arrivalTime}</strong>
              </div>
            </div>

            <div className="trip-card__details">
              <div>
                <i className="fa-solid fa-calendar-days"></i> {trip.date}
              </div>
              <div>
                <i className="fa-solid fa-user-group"></i> {trip.passengers}{" "}
                passengers
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="trips-container p-4">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          {t("profile.Upcoming")}
        </div>
        <div
          className={`tab ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          {t("profile.Past")}
        </div>
        <div
          className={`tab ${activeTab === "cancelled" ? "active" : ""}`}
          onClick={() => setActiveTab("cancelled")}
        >
          {t("profile.Cancelled")}
        </div>
      </div>

      {renderContent()}
    </div>
  );
}

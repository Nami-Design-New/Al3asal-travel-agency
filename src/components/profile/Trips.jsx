import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Trips() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("upcoming");
  const trips = [
  ];

  // const trips = [
  //   {
  //     id: 1,
  //     status: "upcoming",
  //     destination: "القاهرة",
  //     date: "2025-06-15",
  //     time: "10:00 صباحًا",
  //   },

  //   {
  //     id: 2,
  //     status: "past",
  //     destination: "الإسكندرية",
  //     date: "2025-03-10",
  //     time: "3:00 مساءً",
  //   },
  //   {
  //     id: 3,
  //     status: "cancelled",
  //     destination: "أسوان",
  //     date: "2025-02-05",
  //     time: "9:00 صباحًا",
  //   },
  // ];

  const renderContent = () => {
    const filteredTrips = trips.filter((trip) => trip.status === activeTab);

    if (filteredTrips.length === 0) {
      return activeTab === "upcoming" ? (
        <div className="no-trips">
    <img
      src="/icons/notrip.svg"
      alt="no trips"
      className="no-trips__image"
    />
    <h5>{t("profile.noTripsTitle")}</h5>
    <p>{t("profile.noTripsText")}</p>
    <a href="#" className="no-trips__link">
      {t("profile.noTripsLink")}
    </a>
    <div className="no-trips__button-container">
      <button className="custom-btn">{t("profile.noTripsButton")}</button>
    </div>
  </div>
) : (
  <div className="no-data">{t("profile.noData")}</div>
      );
    }

    return (
      <div className="trip-list">
        {filteredTrips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <div className="trip-card__header">
              <i className="fa-solid fa-location-dot"></i>
              <h6>{trip.destination}</h6>
            </div>
            <div className="trip-card__info">
              <div>
                <i className="fa-solid fa-calendar-days"></i>
                <span>{trip.date}</span>
              </div>
              <div>
                <i className="fa-solid fa-tag"></i>
                <span>
                  {trip.status === "upcoming"
                    ? "قادم"
                    : trip.status === "past"
                    ? "سابق"
                    : "ملغي"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="trips-container p-4">
      <div className="header">
        <h4>{t("profile.Flightsbookings")}</h4>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="form-control"
            placeholder={t("profile.search")}
          />
        </div>
      </div>

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

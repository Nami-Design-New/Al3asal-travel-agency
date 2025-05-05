import { useState } from "react";
import { useTranslation } from "react-i18next";
import MyTicket from "../ui/cards/MyTicket";
import FlightDetails from "../ui/modals/FlightDetails";

export default function Trips() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
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
      price: "790$",
      date: "2025-07-20",
      passengers: 1,
      status: "upcoming",
    },
  ];

  return (
    <div className="trips">
      <div className="container">
        <div className="header">
          <h5>{t("profile.Flightsbookings")}</h5>
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

        <div className="trip-list">
          {trips
            .filter((trip) => trip.status === activeTab)
            .map((trip) => (
              <MyTicket trip={trip} key={trip.id} setShow={setShow} />
            ))}

          {trips.filter((trip) => trip.status === activeTab).length === 0 && (
            <div className="no-data">{t("profile.noData")}</div>
          )}
        </div>
      </div>

      <FlightDetails show={show} setShow={setShow} page="checkout" />
    </div>
  );
}

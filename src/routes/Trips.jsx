import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import MyTicket from "../ui/cards/MyTicket";
import ReceiptModal from "../ui/modals/ReceiptModal";
import useGetMyReservations from "../hooks/useGetMyReservations";

export default function Trips() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const { data, isLoading } = useGetMyReservations();

  const trips = data?.trips || [];

  const handleTicketClick = (trip) => {
    setSelectedTrip(trip);
    setShow(true);
  };

  if (isLoading) {
    return (
      <div className="trips">
        <div className="container">
          <div className="header">
            <h5>{t("profile.MyBookings")}</h5>
          </div>
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="trips">
      <div className="container">
        <div className="header">
          <h5>{t("profile.MyBookings")}</h5>
        </div>

        <div className="trip-list">
          {trips.map((trip) => (
            <MyTicket
              trip={trip}
              key={trip.id}
              onClick={() => handleTicketClick(trip)}
            />
          ))}

          {trips.length === 0 && (
            <div className="no-data">
              <img src="/icons/noData.svg" alt="" />
              <h6>{t("profile.noData")}</h6>
              <p>{t("profile.noDataText")}</p>
              <Link to="/flights">{t("profile.bookNow")}</Link>
            </div>
          )}
        </div>
      </div>

      <ReceiptModal show={show} setShow={setShow} trip={selectedTrip} />
    </div>
  );
}

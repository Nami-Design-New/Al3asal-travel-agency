import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import MyTicket from "../ui/cards/MyTicket";
import ReceiptModal from "../ui/modals/ReceiptModal";
import useGetMyReservations from "../hooks/useGetMyReservations";

export default function Trips() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const { data, isLoading } = useGetMyReservations();

  const transformReservationToTrip = (reservation) => {
    const departFlight = reservation.flight_details.depart_flight;

    const departFirstLeg = departFlight.legs[0];
    const departLastLeg = departFlight.legs[departFlight.legs.length - 1];

    const departDuration =
      departFirstLeg.time_info.flight_time_hour +
      departFirstLeg.time_info.flight_time_minute / 60;

    const departStops = departFlight.legs.length - 1;

    const passengerCount = reservation.book_details.books.reduce(
      (total, book) => total + book.pax_list.length,
      0
    );

    const departDate = new Date(departFirstLeg.departure_info.date);
    const today = new Date();
    let status = "upcoming";

    if (departDate < today) {
      status = reservation.status === "cancelled" ? "cancelled" : "past";
    } else if (reservation.status === "cancelled") {
      status = "cancelled";
    }

    return {
      id: reservation.id,
      from: departFirstLeg.departure_info.airport_code,
      to: departLastLeg.arrival_info.airport_code,
      departureTime: departFirstLeg.departure_info.date
        .split(" ")[1]
        .slice(0, 5),
      arrivalTime: departLastLeg.arrival_info.date.split(" ")[1].slice(0, 5),
      duration: `${Math.floor(departDuration)}h ${Math.round(
        (departDuration % 1) * 60
      )}`,
      stops:
        departStops === 0
          ? "Direct"
          : `${departStops} stop${departStops > 1 ? "s" : ""}`,
      price: `${reservation.grand_total}$`,
      date: departFirstLeg.departure_info.date.split(" ")[0],
      passengers: passengerCount,
      status: status,
      reservationData: reservation,
    };
  };

  const trips = data?.reservations
    ? data.reservations.map(transformReservationToTrip)
    : [];

  const handleShowReceipt = (trip) => {
    setSelectedReservation(trip.reservationData);
    setShow(true);
  };

  if (isLoading) {
    return (
      <div className="trips">
        <div className="container">
          <div className="header">
            <h5>{t("profile.MyBookings")}</h5>
          </div>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            {t("profile.loading") || "Loading..."}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="trips">
      <div className="container p-0">
        <div className="trip-list">
          {trips.map((trip) => (
            <MyTicket
              trip={trip}
              key={trip.id}
              setShow={() => handleShowReceipt(trip)}
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

      <ReceiptModal
        show={show}
        setShow={setShow}
        reservationData={selectedReservation}
      />
    </div>
  );
}

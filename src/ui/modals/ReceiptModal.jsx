import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";

export default function ReceiptModal({ show, setShow, trip }) {
  const { t } = useTranslation();
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: "Invoice",
    onAfterPrint: () => setShow(false),
  });

  if (!trip) return null;

  const reservationData = trip.reservationData;
  const firstBook = reservationData?.book_details?.books[0];
  const firstLeg = reservationData?.flight_details?.depart_flight?.legs[0];

  const passengers =
    firstBook?.pax_list?.map((passenger) => ({
      issueDate: new Date().toISOString().split("T")[0],
      name: `${passenger.name} ${passenger.lastname}`,
      passport: passenger.identity_info?.passport?.no || "N/A",
      ticketNumber: passenger.eticket || "N/A",
      seatNumber: "N/A",
    })) || [];

  return (
    <Modal
      centered
      size="lg"
      show={show}
      className="receipt_modal"
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton className="header">
        <h6>{t("flights.receipt")}</h6>
      </Modal.Header>
      <Modal.Body>
        <div className="receipt_container">
          <div className="receipt" ref={invoiceRef}>
            {/* header */}
            <div className="header">
              <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
                <h2>{t("receipt.al3asal")}</h2>
              </div>
              <div className="contact">
                <p>
                  <i className="fa-regular fa-phone"></i> +963964442015
                </p>
                <p>
                  <i className="fa-regular fa-envelope"></i>{" "}
                  info@alasalatravel.com
                </p>
              </div>
            </div>

            {/* about flight */}
            <div className="about_flight">
              <div className="head">
                <h6>{t("receipt.flightDetails")}</h6>
                <h6>
                  {t("receipt.flightNumber")} :{" "}
                  <span>{firstLeg?.flight_number}</span>
                </h6>
              </div>

              <div className="flight_info">
                <div className="airport">
                  <h6>{t("receipt.departure")}</h6>
                  <span>{formatDateTime(firstLeg?.departure_info?.date)}</span>
                  <p>
                    {firstLeg?.departure_info?.airport_name} (
                    {firstLeg?.departure_info?.city_name})
                  </p>
                </div>

                <div className="icon">
                  <img src="/icons/flight_dep.svg" alt="departure" />
                </div>

                <div className="airport">
                  <h6>{t("receipt.arrival")}</h6>
                  <span>{formatDateTime(firstLeg?.arrival_info?.date)}</span>
                  <p>
                    {firstLeg?.arrival_info?.airport_name} (
                    {firstLeg?.arrival_info?.city_name})
                  </p>
                </div>
              </div>

              <ul className="flight_details">
                <li>
                  {t("receipt.airLine")} :{" "}
                  <span>{firstLeg?.airline_info?.carrier_name}</span>
                </li>
                <li>
                  {t("receipt.cabinClass")} : <span>Business</span>
                </li>
                <li>
                  {t("receipt.numberOfPassengers")} :{" "}
                  <span>{trip.passengers}</span>
                </li>
                <li>
                  {t("receipt.duration")} : <span>{trip.duration}</span>
                </li>
                <li>
                  {t("receipt.baggageAllowance")} : <span>20kg</span>
                </li>
                <li>
                  {t("receipt.flightNumber")} :{" "}
                  <span>{firstLeg?.flight_number}</span>
                </li>
                <li>
                  {t("receipt.aircraft")} : <span>Boeing 747</span>
                </li>
                <li>
                  {t("receipt.gate")} : <span>A3</span>
                </li>
              </ul>
            </div>

            {/* passengers */}
            <div className="passengers">
              <table>
                <thead>
                  <tr>
                    <th>{t("receipt.issueDate")}</th>
                    <th>{t("receipt.name")}</th>
                    <th>{t("receipt.passport")}</th>
                    <th>{t("receipt.ticketNumber")}</th>
                    <th>{t("receipt.seatNumber")}</th>
                  </tr>
                </thead>
                <tbody>
                  {passengers.map((passenger, index) => (
                    <tr key={index}>
                      <td>{passenger.issueDate}</td>
                      <td>{passenger.name}</td>
                      <td>{passenger.passport}</td>
                      <td>{passenger.ticketNumber}</td>
                      <td>{passenger.seatNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* price */}
            <div className="price">
              <ul>
                <li>
                  {t("receipt.price")} :{" "}
                  <span>USD {reservationData.grand_total}</span>
                </li>
                <li>
                  {t("receipt.tax")} : <span>USD 200</span>
                </li>
                <li>
                  {t("receipt.total")} :{" "}
                  <span>USD {reservationData.grand_total}</span>
                </li>
              </ul>
            </div>

            {/* protection */}
            <div className="protection_note">
              <div className="note">
                <p>
                  Data Protection Notice: Your personal data will be processed
                  in accordance with the applicable carrier&apos;s privacy
                  policy and, where your booking is made via a reservation
                  system provider (&quot;GDS&quot;), with its privacy policy.
                  These are available at{" "}
                  <span>https://al3asal-travel-agency.vercel.app/privacy</span>{" "}
                  or from the carrier or GDS directly. You should read this
                  documentation, which applies to your booking and specifies,
                  for example, how your personal data is collected, stored,
                  used, disclosed and transferred.
                </p>
              </div>
            </div>
          </div>

          <div className="print">
            <button onClick={handlePrint}>
              <i className="fa-regular fa-print"></i> {t("flights.print")}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function formatDateTime(dateTimeString) {
  if (!dateTimeString) return "N/A";
  const date = new Date(dateTimeString);
  return `${date.toLocaleDateString()}, ${date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })}`;
}

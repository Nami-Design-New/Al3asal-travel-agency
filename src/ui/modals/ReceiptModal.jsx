import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

export default function ReceiptModal({ show, setShow }) {
  const { t } = useTranslation();
  const invoiceRef = useRef();
  const { lang } = useSelector((state) => state.settings);

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: "Invoice",
    onAfterPrint: () => setShow(false),
  });

  const passengers = [
    {
      issueDate: "2025-05-08",
      name: "Ahmed Elsayed",
      passport: "A1234567",
      ticketNumber: "TK123456789",
      seatNumber: "12A",
    },
    {
      issueDate: "2025-05-08",
      name: "Sara Ali",
      passport: "B2345678",
      ticketNumber: "TK987654321",
      seatNumber: "2C",
    },
    {
      issueDate: "2025-05-08",
      name: "Mohamed Hassan",
      passport: "C3456789",
      ticketNumber: "TK112233445",
      seatNumber: "1A",
    },
    {
      issueDate: "2025-05-08",
      name: "Amira Mohamed",
      passport: "D4567890",
      ticketNumber: "TK445566778",
      seatNumber: "3B",
    },
    {
      issueDate: "2025-05-08",
      name: "Youssef Ali",
      passport: "E5678901",
      ticketNumber: "TK667778899",
      seatNumber: "4D",
    },
  ];

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
          <div
            className="receipt"
            ref={invoiceRef}
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          >
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
                  {t("receipt.flightNumber")} : <span>WKI7437</span>
                </h6>
              </div>

              <div className="flight_info">
                <div className="airport">
                  <h6>{t("receipt.departure")}</h6>
                  <span>1 Jul 2025, 08:00</span>
                  <p>Amman International Airport (Amman)</p>
                </div>

                <div className="icon">
                  <img src="/icons/flight_dep.svg" alt="departure" />
                </div>

                <div className="airport">
                  <h6>{t("receipt.arrival")}</h6>
                  <span>1 Jul 2025, 10:30</span>
                  <p>King Khalid International Airport (Saudia Arabia)</p>
                </div>
              </div>

              <ul className="flight_details">
                <li>
                  {t("receipt.airLine")} : <span>Qatar Airways</span>
                </li>
                <li>
                  {t("receipt.cabinClass")} : <span>Business</span>
                </li>
                <li>
                  {t("receipt.numberOfPassengers")} : <span>5</span>
                </li>
                <li>
                  {t("receipt.duration")} : <span>2h 30m</span>
                </li>
                <li>
                  {t("receipt.baggageAllowance")} : <span>20kg</span>
                </li>
                <li>
                  {t("receipt.flightNumber")} : <span>WKI7437</span>
                </li>
                <li>
                  {t("receipt.aircraft")} : <span>Boeing 747</span>
                </li>
              </ul>
            </div>

            {/* passengers */}
            <div className="passengers">
              <table>
                <thead>
                  <th>{t("receipt.issueDate")}</th>
                  <th>{t("receipt.name")}</th>
                  <th>{t("receipt.passport")}</th>
                  <th>{t("receipt.ticketNumber")}</th>
                  <th>{t("receipt.seatNumber")}</th>
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
                  {t("receipt.price")} : <span>USD 1200</span>
                </li>
                <li>
                  {t("receipt.tax")} : <span>USD 200</span>
                </li>
                <li>
                  {t("receipt.total")} : <span>USD 1400</span>
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
                  <span>https://al3asal-travel-agency.vercel.app/privacy</span> or
                  from the carrier or GDS directly. You should read this
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

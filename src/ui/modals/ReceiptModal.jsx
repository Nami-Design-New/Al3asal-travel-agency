import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";

export default function ReceiptModal({ show, setShow, reservationData }) {
  const { t } = useTranslation();
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: t("receipt.invoice"),
    onAfterPrint: () => setShow(false),
  });

  if (
    !reservationData ||
    !reservationData.flight_details ||
    !reservationData.flight_details.depart_flight ||
    !reservationData.flight_details.depart_flight.legs ||
    reservationData.flight_details.depart_flight.legs.length === 0
  ) {
    return null;
  }

  const departFlight = reservationData.flight_details.depart_flight;
  const departFirstLeg = departFlight.legs[0];
  const departLastLeg = departFlight.legs[departFlight.legs.length - 1];

  const passengers =
    reservationData.book_details?.books?.flatMap((book) =>
      book.pax_list?.map((pax) => ({
        issueDate: reservationData.reserved_at,
        name: `${pax.name || ""} ${pax.lastname || ""}`.trim(),
        passport: pax.identity_info?.passport?.no || t("receipt.notAvailable"),
        ticketNumber: pax.eticket || t("receipt.notAvailable"),
        seatNumber: t("receipt.toBeAssigned"),
      }))
    ) || [];

  const totalDuration = departFlight.legs.reduce(
    (total, leg) => total + (leg.time_info?.leg_duration_time_minute || 0),
    0
  );
  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;

  const fareDetail = departFlight.fares?.[0]?.fare_info?.fare_detail;
  const firstFare = departFlight.fares?.[0];
  const cabinType =
    firstFare?.fare_info?.cabin_types?.[0] || t("receipt.economy");
  const baggageAllowance =
    firstFare?.fare_info?.pax_fares?.[0]?.cabin_baggage_allowances?.[0];

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
                  <span>{departFirstLeg.flight_number}</span>
                </h6>
              </div>

              <div className="flight_info">
                <div className="airport">
                  <h6>{t("receipt.departure")}</h6>
                  <span>
                    {new Date(
                      departFirstLeg.departure_info?.date || ""
                    ).toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <p>
                    {departFirstLeg.departure_info?.airport_name ||
                      t("receipt.notAvailable")}{" "}
                    (
                    {departFirstLeg.departure_info?.city_name ||
                      t("receipt.notAvailable")}
                    )
                  </p>
                </div>

                <div className="icon">
                  <img src="/icons/flight_dep.svg" alt="departure" />
                </div>

                <div className="airport">
                  <h6>{t("receipt.arrival")}</h6>
                  <span>
                    {new Date(
                      departLastLeg.arrival_info?.date || ""
                    ).toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <p>
                    {departLastLeg.arrival_info?.airport_name ||
                      t("receipt.notAvailable")}{" "}
                    (
                    {departLastLeg.arrival_info?.city_name ||
                      t("receipt.notAvailable")}
                    )
                  </p>
                </div>
              </div>

              <ul className="flight_details">
                <li>
                  {t("receipt.airLine")} :{" "}
                  <span>
                    {departFirstLeg.airline_info?.carrier_name ||
                      t("receipt.notAvailable")}
                  </span>
                </li>
                <li>
                  {t("receipt.cabinClass")} : <span>{cabinType}</span>
                </li>
                <li>
                  {t("receipt.numberOfPassengers")} :{" "}
                  <span>{passengers.length}</span>
                </li>
                <li>
                  {t("receipt.duration")} :{" "}
                  <span>
                    {hours}h {minutes}m
                  </span>
                </li>
                <li>
                  {t("receipt.baggageAllowance")} :{" "}
                  <span>
                    {baggageAllowance?.amount || 1} {t("receipt.piece")}
                  </span>
                </li>
                <li>
                  {t("receipt.flightNumber")} :{" "}
                  <span>{departFirstLeg.flight_number}</span>
                </li>
                <li>
                  {t("receipt.aircraft")} :{" "}
                  <span>
                    {departFirstLeg.airline_info?.operator_name ||
                      t("receipt.notAvailable")}
                  </span>
                </li>
                <li>
                  {t("receipt.gate")} :{" "}
                  <span>
                    {departFirstLeg.departure_info?.terminal_no ||
                      t("receipt.toBeAssigned")}
                  </span>
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
                  <span>
                    {fareDetail?.currency_code || "USD"}{" "}
                    {fareDetail?.price_info?.base_fare?.toFixed(2) || "0.00"}
                  </span>
                </li>
                <li>
                  {t("receipt.tax")} :{" "}
                  <span>
                    {fareDetail?.currency_code || "USD"}{" "}
                    {fareDetail?.price_info?.tax?.toFixed(2) || "0.00"}
                  </span>
                </li>
                <li>
                  {t("receipt.total")} :{" "}
                  <span>
                    {fareDetail?.currency_code || "USD"}{" "}
                    {fareDetail?.price_info?.total_fare?.toFixed(2) || "0.00"}
                  </span>
                </li>
              </ul>
            </div>

            {/* protection */}
            <div className="protection_note">
              <div className="note">
                <p>{t("receipt.dataProtectionNotice")}</p>
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

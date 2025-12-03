import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import useGetSettings from "../../hooks/useGetSettings";

export default function ReceiptModal({ show, setShow, reservationData }) {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  const profitPercentage = settings?.profit_percentage || 0;
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: t("receipt.invoice"),
    onAfterPrint: () => setShow(false),
  });

  if (
    !reservationData ||
    !reservationData.flight_details ||
    !reservationData.flight_details.depart_flight
  ) {
    return null;
  }

  const departFlight = reservationData.flight_details.depart_flight;
  const returnFlight = reservationData.flight_details.return_flight;
  const isRoundTrip = !!returnFlight;

  const departFirstLeg = departFlight.legs[0];
  const departLastLeg = departFlight.legs[departFlight.legs.length - 1];
  const returnFirstLeg = returnFlight?.legs?.[0];
  const returnLastLeg = returnFlight?.legs?.[returnFlight?.legs?.length - 1];

  // Extract passengers from all books
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

  // Calculate total duration for depart flight
  const departTotalDuration = departFlight.legs.reduce(
    (total, leg) => total + (leg.time_info?.leg_duration_time_minute || 0),
    0
  );
  const departHours = Math.floor(departTotalDuration / 60);
  const departMinutes = departTotalDuration % 60;

  // Calculate total duration for return flight (if exists)
  let returnTotalDuration = 0;
  let returnHours = 0;
  let returnMinutes = 0;

  if (isRoundTrip) {
    returnTotalDuration = returnFlight.legs.reduce(
      (total, leg) => total + (leg.time_info?.leg_duration_time_minute || 0),
      0
    );
    returnHours = Math.floor(returnTotalDuration / 60);
    returnMinutes = returnTotalDuration % 60;
  }

  // Get fare details for both flights
  const departFareDetail = departFlight.fares?.[0]?.fare_info?.fare_detail;
  const returnFareDetail = returnFlight?.fares?.[0]?.fare_info?.fare_detail;

  const departCabinType =
    departFlight.fares?.[0]?.fare_info?.cabin_types?.[0] ||
    t("receipt.economy");
  const returnCabinType =
    returnFlight?.fares?.[0]?.fare_info?.cabin_types?.[0] ||
    t("receipt.economy");

  // Calculate total price for both flights
  const departTotalPrice = departFareDetail?.price_info?.total_fare || 0;
  const returnTotalPrice = returnFareDetail?.price_info?.total_fare || 0;
  const grandTotal = departTotalPrice + returnTotalPrice;

  // Get baggage allowance
  const departBaggageAllowance =
    departFlight.fares?.[0]?.fare_info?.pax_fares?.[0]?.baggage_allowances?.[0];
  const returnBaggageAllowance =
    returnFlight?.fares?.[0]?.fare_info?.pax_fares?.[0]
      ?.baggage_allowances?.[0];

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
        <span className="trip-type-badge">
          {isRoundTrip ? t("receipt.roundTrip") : t("receipt.oneWay")}
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="receipt_container">
          <div className="receipt" ref={invoiceRef}>
            {/* Header */}
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

            {/* Booking Information */}
            <div className="booking-info">
              <div className="booking-details">
                <div className="detail-item">
                  <span className="label">
                    {t("receipt.bookingReference")}:
                  </span>
                  <span className="value">
                    {reservationData.book_details?.books?.[0]?.pnr ||
                      t("receipt.notAvailable")}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="label">{t("receipt.bookingDate")}:</span>
                  <span className="value">{reservationData.reserved_at}</span>
                </div>
                <div className="detail-item">
                  <span className="label">{t("receipt.status")}:</span>
                  <span className="value status">{reservationData.status}</span>
                </div>
              </div>
            </div>

            {/* Departure Flight Section */}
            <div className="flight-section">
              <div className="section-header">
                <h5>{t("receipt.departureFlight")}</h5>
              </div>

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
                    {t("receipt.cabinClass")} : <span>{departCabinType}</span>
                  </li>
                  <li>
                    {t("receipt.duration")} :{" "}
                    <span>
                      {departHours}h {departMinutes}m
                    </span>
                  </li>
                  <li>
                    {t("receipt.baggageAllowance")} :{" "}
                    <span>
                      {departBaggageAllowance?.amount || 1} {t("receipt.piece")}
                    </span>
                  </li>
                  {departFlight.legs.length > 1 && (
                    <li>
                      {t("receipt.stops")} :{" "}
                      <span>
                        {departFlight.legs.length - 1} {t("receipt.stop")}
                        {departFlight.legs.length - 1 > 1 ? "s" : ""}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Return Flight Section (if round trip) */}
            {isRoundTrip && returnFirstLeg && (
              <div className="flight-section return-flight">
                <div className="section-header">
                  <h5>{t("receipt.returnFlight")}</h5>
                </div>

                <div className="about_flight">
                  <div className="head">
                    <h6>{t("receipt.flightDetails")}</h6>
                    <h6>
                      {t("receipt.flightNumber")} :{" "}
                      <span>{returnFirstLeg.flight_number}</span>
                    </h6>
                  </div>

                  <div className="flight_info">
                    <div className="airport">
                      <h6>{t("receipt.departure")}</h6>
                      <span>
                        {new Date(
                          returnFirstLeg.departure_info?.date || ""
                        ).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <p>
                        {returnFirstLeg.departure_info?.airport_name ||
                          t("receipt.notAvailable")}{" "}
                        (
                        {returnFirstLeg.departure_info?.city_name ||
                          t("receipt.notAvailable")}
                        )
                      </p>
                    </div>

                    <div className="icon">
                      <img src="/icons/flight_dep.svg" alt="return" />
                    </div>

                    <div className="airport">
                      <h6>{t("receipt.arrival")}</h6>
                      <span>
                        {new Date(
                          returnLastLeg.arrival_info?.date || ""
                        ).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <p>
                        {returnLastLeg.arrival_info?.airport_name ||
                          t("receipt.notAvailable")}{" "}
                        (
                        {returnLastLeg.arrival_info?.city_name ||
                          t("receipt.notAvailable")}
                        )
                      </p>
                    </div>
                  </div>

                  <ul className="flight_details">
                    <li>
                      {t("receipt.airLine")} :{" "}
                      <span>
                        {returnFirstLeg.airline_info?.carrier_name ||
                          t("receipt.notAvailable")}
                      </span>
                    </li>
                    <li>
                      {t("receipt.cabinClass")} : <span>{returnCabinType}</span>
                    </li>
                    <li>
                      {t("receipt.duration")} :{" "}
                      <span>
                        {returnHours}h {returnMinutes}m
                      </span>
                    </li>
                    <li>
                      {t("receipt.baggageAllowance")} :{" "}
                      <span>
                        {returnBaggageAllowance?.amount || 1}{" "}
                        {t("receipt.piece")}
                      </span>
                    </li>
                    {returnFlight.legs.length > 1 && (
                      <li>
                        {t("receipt.stops")} :{" "}
                        <span>
                          {returnFlight.legs.length - 1} {t("receipt.stop")}
                          {returnFlight.legs.length - 1 > 1 ? "s" : ""}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}

            {/* Passengers Section */}
            <div className="passengers-section">
              <div className="section-header">
                <h5>
                  {t("receipt.passengers")} ({passengers.length})
                </h5>
              </div>

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
            </div>

            {/* Price Breakdown */}
            <div className="price-section">
              <div className="section-header">
                <h5>{t("receipt.priceBreakdown")}</h5>
              </div>

              <div className="price-breakdown">
                <div className="price-row">
                  <span>{t("receipt.departureFlight")}:</span>
                  <span>
                    {departFareDetail?.currency_code || "USD"}{" "}
                    {(
                      departTotalPrice +
                      (departTotalPrice * profitPercentage) / 100
                    ).toFixed(2)}
                  </span>
                </div>

                {isRoundTrip && (
                  <div className="price-row">
                    <span>{t("receipt.returnFlight")}:</span>
                    <span>
                      {returnFareDetail?.currency_code || "USD"}{" "}
                      {(
                        returnTotalPrice +
                        (returnTotalPrice * profitPercentage) / 100
                      ).toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="price-row total">
                  <span>{t("receipt.grandTotal")}:</span>
                  <span>
                    {departFareDetail?.currency_code || "USD"}{" "}
                    {(
                      grandTotal +
                      (grandTotal * profitPercentage) / 100
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Protection Notice */}
            <div className="protection_note">
              <div className="note">
                <p>{t("receipt.dataProtectionNotice")}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="receipt-footer">
              <p>{t("receipt.thankYou")}</p>
              <p className="footer-note">{t("receipt.contactForSupport")}</p>
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

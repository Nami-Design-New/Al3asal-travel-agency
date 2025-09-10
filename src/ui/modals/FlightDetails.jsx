import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import FlightDetailsCard from "../cards/FlightDetailsCard";
import useFlightsStore from "../../stores/flightsStore";

export default function FlightDetails({ show, setShow, page }) {
  const { t } = useTranslation();
  const { dapart_flight, return_flight } = useFlightsStore();

  const getTotalPrice = () => {
    const departPrice =
      dapart_flight?.fares[0]?.fare_info?.fare_detail?.price_info?.total_fare;
    const returnPrice =
      return_flight?.fares[0]?.fare_info?.fare_detail?.price_info?.total_fare;
    return departPrice + returnPrice;
  };

  return (
    <Modal
      centered
      size="lg"
      show={show}
      className="flight_details_modal"
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton className="header">
        <h6>{t("flights.flightDetails")}</h6>
      </Modal.Header>
      <Modal.Body>
        <div className="itinerary">
          <h6 className="title">{t("flights.itinerary")}</h6>

          <div className="details">
            <FlightDetailsCard
              type={t("flights.departure")}
              flight={dapart_flight}
            />

            <FlightDetailsCard
              type={t("flights.arrival")}
              flight={return_flight}
            />
          </div>

          {page !== "checkout" && (
            <div className="price mt-4">
              <h5>
                {t("flights.totalPrice")}:
                <div>
                  {getTotalPrice().toFixed(2)} <span>USD / Person</span>
                </div>
              </h5>

              <Link to="/checkout" className="bookNow">
                {t("flights.bookNow")}
              </Link>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

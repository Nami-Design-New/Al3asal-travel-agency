import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import FlightDetailsCard from "../cards/FlightDetailsCard";

export default function FlightDetails({ show, setShowModal }) {
  const { t } = useTranslation();

  return (
    <Modal
      centered
      size="lg"
      show={show}
      backdrop="static"
      className="flight_details_modal"
      onHide={() => setShowModal(false)}
    >
      <Modal.Body>
        <div className="header">
          <h6>{t("flights.flightDetails")}</h6>
          <button className="close_btn" onClick={() => setShowModal(false)}>
            <i className="fa-regular fa-x"></i>
          </button>
        </div>

        <div className="itinerary">
          <h6 className="title">{t("flights.itinerary")}</h6>

          <div className="details">
            <FlightDetailsCard type={t("flights.departure")} />
            <FlightDetailsCard type={t("flights.arrival")} />
          </div>

          <div className="price mt-4">
            <h5>
              {t("flights.totalPrice")}:
              <div>
                240000 <span>EGP</span>
              </div>
            </h5>

            <Link to="/checkout" className="bookNow">
              {t("flights.bookNow")}
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

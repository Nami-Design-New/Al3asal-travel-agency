import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

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
            <div className="flight">
              <h6>{t("flights.departure")}</h6>

              <div className="airports">
                <div className="airPort">
                  <span>Tue, 1 Jul</span>
                  <h6>SPX 01:40</h6>
                  <span>Sphinx International Airport</span>
                </div>

                <div className="icon">
                  <i className="fa-light fa-plane-departure"></i>
                </div>

                <div className="airPort last">
                  <span>Tue, 1 Jul</span>
                  <h6>RUH 12:15</h6>
                  <span>King Khalid International Airport</span>
                </div>
              </div>
            </div>

            <div className="flight">
              <h6>{t("flights.arrival")}</h6>
            </div>
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

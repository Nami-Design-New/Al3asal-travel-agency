import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function FlightDetails({ show, setShowModal }) {
  const { t } = useTranslation();

  return (
    <Modal
      centered
      size="lg"
      show={show}
      backdrop="static"
      className="flight_details_modal"
    >
      <Modal.Body>
        <div className="header">
          <h6>{t("flights.flightDetails")}</h6>
          <button
            className="close_btn"
            onClick={() => setShowModal(false)}
          ></button>

          
        </div>
      </Modal.Body>
    </Modal>
  );
}

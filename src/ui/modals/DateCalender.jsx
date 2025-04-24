import { Modal } from "react-bootstrap";
import { Calendar } from "react-multi-date-picker";

export default function DateCalender({ showModal, setShowModal }) {

  return (
    <Modal
      centered
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header className="pb-0" closeButton></Modal.Header>
      <Modal.Body className="calender_modal">
        <div className="calender_wrapper">
          <Calendar range numberOfMonths={2} minDate={new Date()} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

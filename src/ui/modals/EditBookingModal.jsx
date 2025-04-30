import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const EditBookingModal = ({ show, handleClose }) => {
  const { t } = useTranslation();
  const [refNumber, setRefNumber] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    if (!refNumber) newErrors.refNumber = t("modal.required");
    if (!emailPhone) newErrors.emailPhone = t("modal.required");

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="edit-booking-modal">
      <Modal.Header closeButton>
        <Modal.Title>{t("modal.title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="modal-description">{t("modal.description")}</p>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder={t("modal.emailOrPhone")}
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            isInvalid={!!errors.emailPhone}
          />
          <Form.Control.Feedback type="invalid">{errors.emailPhone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder={t("modal.refNumber")}
            value={refNumber}
            onChange={(e) => setRefNumber(e.target.value)}
            isInvalid={!!errors.refNumber}
          />
          <Form.Control.Feedback type="invalid">{errors.refNumber}</Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid">
            
          <Button className="customBtn" onClick={handleSubmit}>
            {t("modal.viewDetails")}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditBookingModal;

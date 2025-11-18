import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SubmitButton from "../forms/SubmitButton";

const ConfirmDeleteModal = ({
  show,
  closeDeleteModal,
  text,
  loading,
  onConfirm,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      show={show}
      onHide={closeDeleteModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="row confirmation_modal">
          <div className="col-12 p-2">
            <p>{text}</p>
          </div>
          <div className="col-12 p-2 d-flex gap-2">
            <button className="cancel" onClick={closeDeleteModal}>
              {t("cancel")}
            </button>
            <SubmitButton
              text={t("confirm")}
              className="confirm red"
              loading={loading}
              event={onConfirm}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmDeleteModal;

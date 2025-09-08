import { Modal } from "react-bootstrap";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import ResetPassword1 from "../../components/auth/ResetPassword1";
import ResetPassword2 from "../../components/auth/ResetPassword2";
import ResetPassword3 from "../../components/auth/ResetPassword3";
import useAuthStore from "../../stores/authStore";

export default function AuthModal() {
  const { show, step, closeAuthModal } = useAuthStore();

  const handleClose = () => {
    closeAuthModal();
  };

  return (
    <Modal centered size="lg" show={show} backdrop="static">
      <Modal.Body className="auth_modal">
        <div className="modal_close_btn" onClick={handleClose} />

        <div className="auth_img">
          <img src="/images/auth.jpg" alt="" />
        </div>

        <div className="auth_form">
          {step === "login" && <Login />}

          {step === "register" && <Register />}

          {step === "reset1" && <ResetPassword1 />}

          {step === "reset2" && <ResetPassword2 />}

          {step === "reset3" && <ResetPassword3 />}
        </div>
      </Modal.Body>
    </Modal>
  );
}

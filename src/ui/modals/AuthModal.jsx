import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import Login from "../../components/auth/login/Login";
import Register from "../../components/auth/register/Register";
import VerifyRegister from "../../components/auth/register/VerifyRegister";
import ResetPassword1 from "../../components/auth/reset-password/ResetPassword1";
import ResetPassword2 from "../../components/auth/reset-password/ResetPassword2";
import ResetPassword3 from "../../components/auth/reset-password/ResetPassword3";
import useAuthStore from "../../stores/authStore";
import useAuth from "../../hooks/useAuth";

export default function AuthModal() {
  const { show, step, closeAuthModal } = useAuthStore();
  const { isAuthed } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    closeAuthModal();

    if (!isAuthed && location.pathname === "/checkout") {
      navigate("/flights");
    }
  };

  return (
    <Modal
      centered
      size="lg"
      show={show}
      backdrop="static"
      onHide={handleClose}
    >
      <Modal.Body className="auth_modal">
        <div className="modal_close_btn" onClick={handleClose} />

        <div className="auth_img">
          <img src="/images/auth.jpg" alt="" />
        </div>

        <div className="auth_form">
          {step === "login" && <Login />}
          {step === "register" && <Register />}
          {step === "verify_register" && <VerifyRegister />}

          {step === "reset1" && <ResetPassword1 />}
          {step === "reset2" && <ResetPassword2 />}
          {step === "reset3" && <ResetPassword3 />}
        </div>
      </Modal.Body>
    </Modal>
  );
}

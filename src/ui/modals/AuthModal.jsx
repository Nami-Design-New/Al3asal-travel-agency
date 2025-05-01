import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../../redux/slices/auth";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import ResetPassword1 from "../../components/auth/ResetPassword1";
import ResetPassword2 from "../../components/auth/ResetPassword2";
import ResetPassword3 from "../../components/auth/ResetPassword3";

export default function AuthModal() {
  const { show } = useSelector((state) => state.auth);
  const { step } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAuthModal());
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

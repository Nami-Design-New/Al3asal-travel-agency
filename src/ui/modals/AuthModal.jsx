import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../../redux/slices/auth";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

export default function AuthModal() {
  const show = useSelector((state) => state.auth);
  const step = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Modal centered size="lg" show={show} backdrop="static">
      <Modal.Body className="auth_modal">
        <div
          className="modal_close_btn"
          onClick={() => dispatch(closeAuthModal)}
        />

        <div className="auth_img">
          <img src="/images/hero.jpg" alt="" />
        </div>

        <div className="auth_form">
          {step === "login" && <Login />}
          {step === "register" && <Register />}
        </div>
      </Modal.Body>
    </Modal>
  );
}

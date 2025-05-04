import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField({ label, error, ...props }) {
  return (
    <div className="input-field">
      {label && <label htmlFor={props?.id}>{label}</label>}
      <PhoneInput {...props} country={"sy"} enableSearch={true} />
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </div>
  );
}

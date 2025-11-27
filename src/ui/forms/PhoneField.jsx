import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField({ name, label, error, handleChange }) {
  const { control, trigger } = useFormContext();

  return (
    <div className="input-field">
      {label && <label>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PhoneInput
            country="sy"
            enableSearch
            value={field.value || ""}
            onChange={(value, country) => {
              field.onChange(value);
              handleChange(value, country);
              trigger(name);
            }}
            inputClass={error ? "is-invalid" : ""}
          />
        )}
      />

      {error && (
        <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
          {error}
        </Form.Control.Feedback>
      )}
    </div>
  );
}

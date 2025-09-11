import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField({ name, label, error }) {
  const { control } = useFormContext();

  console.log(error);
  

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
            value={field.value?.raw || ""}
            onChange={(value, country) => {
              const dialCode = `+${country.dialCode}`;
              const phoneNumber = value.replace(dialCode, "");

              field.onChange({
                raw: value,
                country_code: country.countryCode,
                area_code: dialCode,
                phone_number: phoneNumber,
              });
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

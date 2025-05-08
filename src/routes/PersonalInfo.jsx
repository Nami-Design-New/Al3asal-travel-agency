import { useTranslation } from "react-i18next";
import { useState } from "react";
import InputField from "./../ui/forms/InputField";
import PhoneField from "./../ui/forms/PhoneField";
import GenderSelect from "../ui/forms/GenderSelect";
import SubmitButton from "../ui/forms/SubmitButton";
import ReactFlagsSelect from "react-flags-select";
import PasswordField from "./../ui/forms/PasswordField";
import { Form } from "react-bootstrap";

export default function PersonalInfo() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="personal_info mb-3">
        <h6>{t("profile.PersonalInformation")}</h6>

        <form className="form_ui">
          <div className="form_group">
            <InputField
              label={t("profile.fullName")}
              placeholder={t("profile.enterYourName")}
              value="Ahmed Elsayed"
            />
            <InputField
              type="email"
              label={t("profile.email")}
              placeholder={t("profile.enterYourEmail")}
              value="ahmedelsayed2102@icloud.com"
            />
          </div>

          <div className="form_group">
            <PhoneField
              label={t("profile.phone")}
              placeholder={t("profile.enterPhone")}
              value="9631234567"
            />

            <div className="input-field">
              <label>{t("checkoutForm.nationality")}</label>
              <ReactFlagsSelect selected="SY" />
            </div>
          </div>

          <div className="form_group">
            <InputField
              type="date"
              label={t("profile.dateOfBirth")}
              value="2000-01-01"
            />
            <GenderSelect />
          </div>

          <div className="form_group">
            <InputField
              label={t("profile.adress")}
              value="Syria - Damascus"
              placeholder={t("profile.enterYourAdress")}
            />
          </div>

          <div className="form_group">
            <Form.Check
              type="switch"
              label={t("profile.wantChangePassword")}
              onChange={() => setShow(!show)}
            />
          </div>

          {show && (
            <div className="form_group">
              <PasswordField
                label={t("profile.password")}
                placeholder={t("profile.enterYourPassword")}
              />
              <PasswordField
                label={t("profile.confirmPassword")}
                placeholder={t("profile.enterYourPassword")}
              />
            </div>
          )}

          <SubmitButton text={t("profile.save")} />
        </form>
      </div>

      <div className="personal_info">
        <h6>{t("profile.passport")}</h6>

        <form className="form_ui">
          <div className="form_group">
            <InputField
              label={t("profile.passportHolder")}
              placeholder={t("profile.enterName")}
              value="ahmed elsayed"
            />

            <div className="input-field">
              <label>{t("checkoutForm.nationality")}</label>
              <ReactFlagsSelect selected="SY" />
            </div>
          </div>

          <div className="form_group">
            <InputField
              label={t("profile.passportNumber")}
              placeholder={t("profile.enterYourPassportNumber")}
              value="123456789"
            />
            <InputField
              type="date"
              label={t("profile.passportExpiryDate")}
              value="2025-01-01"
            />
          </div>

          <div className="form_group">
            <InputField
              label={t("profile.passportIssueDate")}
              value="2022-01-01"
              type="date"
            />

            <div className="input-field">
              <label>{t("profile.passportIssueCountry")}</label>
              <ReactFlagsSelect selected="SY" />
            </div>
          </div>
          <SubmitButton text={t("profile.save")} />
        </form>
      </div>

      <button className="delete_account">
        <i className="fa-regular fa-trash"></i>
        {t("profile.deleteAccount")}
      </button>
    </>
  );
}

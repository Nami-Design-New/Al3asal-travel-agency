import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import ReactFlagsSelect from "react-flags-select";
import GenderSelect from "../../ui/forms/GenderSelect";

export default function TravelerForm() {
  const { t } = useTranslation();
  return (
    <>
      <div className="col-12 p-2">
        <h6>traveler 1</h6>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          label={t("checkoutForm.fullName")}
          placeholder={t("checkoutForm.enterName")}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField type="date" label={t("checkoutForm.dateOfBirth")} />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          type="number"
          label={t("checkoutForm.passportNumber")}
          placeholder={t("checkoutForm.enterPassportNumber")}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField type="date" label={t("checkoutForm.passportExpiryDate")} />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <div className="input-field">
          <label>{t("checkoutForm.nationality")}</label>
          <ReactFlagsSelect selected="SY" />
        </div>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <GenderSelect />
      </div>
    </>
  );
}

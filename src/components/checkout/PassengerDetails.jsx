import { useTranslation } from "react-i18next";
import InputField from "./../../ui/forms/InputField";

export default function PassengerDetails() {
  const { t } = useTranslation();

  return (
    <form className="form_ui">
      <div className="row">
        <div className="col-lg-6 col-12 p-2">
          <InputField
            label={t("checkoutForm.fullName")}
            placeholder={t("checkoutForm.enterName")}
          />
        </div>

        <div className="col-lg-6 col-12 p-2">
          <InputField
            type="email"
            label={t("checkoutForm.email")}
            placeholder={t("checkoutForm.enterEmail")}
          />
        </div>

        <div className="col-lg-6 col-12 p-2">
          <InputField
            type="number"
            label={t("checkoutForm.passportNumber")}
            placeholder={t("checkoutForm.enterPassportNumber")}
          />
        </div>

        <div className="col-lg-6 col-12 p-2">
          <InputField
            type="date"
            label={t("checkoutForm.passportNumber")}
            placeholder={t("checkoutForm.enterPassportNumber")}
          />
        </div>
      </div>
    </form>
  );
}

import { useTranslation } from "react-i18next";
import InputField from "./../../ui/forms/InputField";
import PhoneField from "../../ui/forms/PhoneField";
import SubmitButton from "./../../ui/forms/SubmitButton";
import TravelerForm from "./TravelerForm";

export default function PassengerDetails() {
  const { t } = useTranslation();

  return (
    <form className="form_ui">
      <div className="row">
        <div className="col-12 p-2">
          <h6>{t("checkoutForm.contactInfo")}</h6>
        </div>

        <div className="col-lg-6 col-12 p-2">
          <InputField
            type="email"
            label={t("checkoutForm.email")}
            placeholder={t("checkoutForm.enterEmail")}
          />
        </div>

        <div className="col-lg-6 col-12 p-2">
          <PhoneField
            label={t("checkoutForm.phone")}
            placeholder={t("checkoutForm.enterPhone")}
          />
        </div>

        <TravelerForm />

        <div className="col-12 p-2 mt-2">
          <SubmitButton text={t("checkoutForm.continue")} />
        </div>
      </div>
    </form>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "./../../ui/forms/InputField";
import PhoneField from "../../ui/forms/PhoneField";
import SubmitButton from "./../../ui/forms/SubmitButton";
import TravelerForm from "./TravelerForm";

export default function PassengerDetails() {
  const { t } = useTranslation();

  const passengers = ["Adult 1", "Adult 2", "Child 1", "Child 2", "Infant 1"];
  const [active, setActive] = useState(0);

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

        {passengers.map((passenger, index) => (
          <TravelerForm
            key={index}
            title={passenger}
            index={index}
            setActive={setActive}
            active={active}
            isLast={active === passengers.length - 1}
          />
        ))}

        {active === passengers.length - 1 && (
          <div className="col-12 p-2 mt-2">
            <SubmitButton text={t("checkoutForm.continue")} />
          </div>
        )}
      </div>
    </form>
  );
}

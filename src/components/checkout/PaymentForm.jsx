import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function PaymentForm() {
  const { t } = useTranslation();
  return (
    <form className="form_ui">
      <div className="row">
        <div className="col-12 p-2">
          <div className="payment_header">
            <div className="icon">
              <img src="/icons/visa.svg" alt="visa" />
            </div>
            <div className="content">
              <h6>{t("checkoutForm.paymentMethod")}</h6>
              <p>{t("checkoutForm.paymentMethodDescription")}</p>
            </div>
          </div>
        </div>

        <div className="col-12 p-2">
          <InputField
            label={t("checkoutForm.cardNumber")}
            type="number"
            placeholder="1234 1234 1234 1234"
          />
        </div>

        <div className="col-12 p-2">
          <InputField
            label={t("checkoutForm.cardHolder")}
            placeholder="John Doe"
          />
        </div>

        <div className="col-lg-6 col-12 p-2">
          <InputField label={t("checkoutForm.expiryDate")} type="date" />
        </div>

        <div className="col-lg-6 col-12 p-2">
          <InputField
            label={t("checkoutForm.cvv")}
            type="password"
            maxLength="3"
            placeholder="cvv"
          />
        </div>

        <div className="col-12 p-2 mt-2">
          <SubmitButton
            className="success"
            text={t("checkoutForm.pay") + " " + "26,191.01 EGP"}
          />
        </div>
      </div>
    </form>
  );
}

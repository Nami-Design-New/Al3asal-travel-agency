import { useState } from "react";
import { useTranslation } from "react-i18next";
import PassengerDetails from "./PassengerDetails";
import PaymentForm from "./PaymentForm";

export default function CheckoutForm() {
  const { t } = useTranslation();
  const tabs = [
    "passengerDetails",
    "securePayment",
  ];
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="checkout_form">
      <div className="wizard_tabs">
        {tabs.map((tab, index) => (
          <div
            className={`wizard_tab ${
              activeTab === `tab${index + 1}` ? "active" : ""
            }`}
            key={index}
            onClick={() => setActiveTab(`tab${index + 1}`)}
          >
            <div className="num">
              <span>{index + 1}</span>
            </div>
            <h6>{t(`checkoutForm.${tab}`)}</h6>
          </div>
        ))}
      </div>

      <div className="form_container">
        {activeTab === "tab1" && <PassengerDetails />}

        {activeTab === "tab2" && <PaymentForm />}
      </div>
    </div>
  );
}

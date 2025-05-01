import { useState } from "react";
import PassengerDetails from "./PassengerDetails";

export default function CheckoutForm() {
  const tabs = [
    "Passenger details",
    "Insurance and Extra Services",
    "Secure Payment",
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
            <h6>{tab}</h6>
          </div>
        ))}
      </div>

      <div className="form_container">
        {activeTab === "tab1" && <PassengerDetails />}
      </div>
    </div>
  );
}

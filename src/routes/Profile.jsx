import { useState } from "react";
import PaymentMethods from "../components/profile/PaymentMethods";
import Trips from "../components/profile/Trips";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("payment");

  const renderTabContent = () => {
    switch (activeTab) {
      case "payment":
        return <PaymentMethods />;
      case "trips":
        return <Trips />;
      default:
        return <PaymentMethods />;
    }
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="avatar">MS</div>
          <h5>Mariam Samir</h5>
          <p className="email">mariamsamir52@gmail.com</p>
        </div>

        <ul className="profile-menu">
        <li
        >
            <i className="fa-regular fa-user"></i>
            <span className="menu-text">ملفي الشخصي</span>
          </li>
          <li
            onClick={() => setActiveTab("payment")}
            className={activeTab === "payment" ? "active" : ""}
          >
            <i className="fa-regular fa-credit-card"></i>
            <span className="menu-text"> طرق الدفع </span>
          </li>
          <li
            onClick={() => setActiveTab("trips")}
            className={activeTab === "trips" ? "active" : ""}
          >
            <i className="fa fa-plane"></i>
            <span className="menu-text">رحلاتي</span>
          </li>
         
        </ul>
      </div>

      <div className="profile-content">{renderTabContent()}</div>
    </div>
  );
}

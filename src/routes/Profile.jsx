import { useState } from "react";
import PaymentMethods from "../components/profile/PaymentMethods";
import Trips from "../components/profile/Trips";
import { useTranslation } from "react-i18next";
import MyProfile from "../components/profile/MyProfile";

export default function Profile() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("myprofile");

  const renderTabContent = () => {
    switch (activeTab) {
        case "payment":
          return <PaymentMethods />;
        case "trips":
          return <Trips />;
        case "myprofile":
          return <MyProfile />;
        default:
          return null;
      }
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="avatar">MS</div>
          <h5>Mariam Samir</h5>
          <p className="email">mariam77@gmail.com</p>
        </div>

        <ul className="profile-menu">
          <li
            onClick={() => setActiveTab("myprofile")}
            className={activeTab === "myprofile" ? "active" : ""}
          >
           <i className="fa-regular fa-user"></i>
           <span className="menu-text">{t("profile.myprofile")}</span>
          </li>
          <li
            onClick={() => setActiveTab("payment")}
            className={activeTab === "payment" ? "active" : ""}
          >
            <i className="fa-regular fa-credit-card"></i>
            <span className="menu-text">{t("profile.payment")}</span>
          </li>
          
          <li
            onClick={() => setActiveTab("trips")}
            className={activeTab === "trips" ? "active" : ""}
          >
            <i className="fa fa-plane"></i>
            <span className="menu-text">{t("profile.mytrips")} </span>
          </li>
        </ul>
      </div>

      <div className="profile-content">{renderTabContent()}</div>
    </div>
  );
}

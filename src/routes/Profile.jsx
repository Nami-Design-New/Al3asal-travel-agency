import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="avatar">MS</div>
          <h5>Mariam Samir</h5>
          <p className="email">mariam77@gmail.com</p>
        </div>

        <ul className="profile-menu">
          <NavLink to="/profile/my-profile">
            <i className="fa-regular fa-user"></i>
            <span className="menu-text">{t("profile.myprofile")}</span>
          </NavLink>

          <NavLink to="/profile/payment-methods">
            <i className="fa-regular fa-credit-card"></i>
            <span className="menu-text">{t("profile.payment")}</span>
          </NavLink>

          <NavLink to="/profile/my-trips">
            <i className="fa fa-plane"></i>
            <span className="menu-text">{t("profile.mytrips")} </span>
          </NavLink>
        </ul>
      </div>

      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
}

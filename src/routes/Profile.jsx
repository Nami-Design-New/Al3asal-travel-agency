import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className="profile-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 p-2">
            <div className="profile-sidebar">
              <div className="profile-header">
                <div className="avatar">MS</div>
                <div>
                  <h5>Mariam Samir</h5>
                  <p className="email">mariam77@gmail.com</p>
                </div>
              </div>

              <ul className="profile-menu">
                <li>
                  <NavLink to="" end>
                    <i className="fa-regular fa-user"></i>
                    <span className="menu-text">{t("profile.myprofile")}</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="payment-methods">
                    <i className="fa-regular fa-credit-card"></i>
                    <span className="menu-text">{t("profile.payment")}</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="my-trips">
                    <i className="fa fa-plane"></i>
                    <span className="menu-text">{t("profile.mytrips")}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-9 col-12 p-2">
            <div className="profile-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

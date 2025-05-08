import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <section className="my_profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 p-2">
            <div className="profile_sidebar">
              <div className="user">
                <div className="avatar">AE</div>
                <div className="content">
                  <h6>Ahmed Elsayed</h6>
                  <span>ahmedelsayed2102@icloud.com</span>
                </div>
              </div>

              <div className="nav_links">
                <NavLink to="" end className="nav_link">
                  <i className="fa-regular fa-user-pen"></i>
                  {t("profile.PersonalInformation")}
                </NavLink>

                <NavLink to="bookings" className="nav_link">
                  <i className="fa-regular fa-plane"></i>
                  {t("profile.MyBookings")}
                </NavLink>

                <NavLink to="/contact" className="nav_link">
                  <i className="fa-regular fa-circle-info"></i>
                  {t("profile.helpSupport")}
                </NavLink>

                <NavLink to="/" className="nav_link">
                  <i className="fa-regular fa-sign-out-alt"></i>
                  {t("profile.logout")}
                </NavLink>

                <NavLink to="/" className="nav_link danger">
                  <i className="fa-regular fa-trash"></i>
                  {t("profile.deleteAccount")}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-4 col-12 p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

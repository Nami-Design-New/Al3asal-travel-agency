import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

function ResponsiveNav() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="small_menu">
      <Link
        aria-label="Home"
        to="/"
        className={`menu_item ${location.pathname === "/" ? "active" : ""}`}
      >
        <i className="fa-solid fa-house-chimney"></i>
        <span>{t("header.home")}</span>
      </Link>

      <Link
        aria-label="Flight Booking"
        to="/profile/my-trips"
        className={`menu_item ${
          location.pathname === "/profile/my-trips" ? "active" : ""
        }`}
      >
        <i className="fa-solid fa-plane-departure"></i>
        <span>{t("header.myflights")}</span>
      </Link>

      <Link
        aria-label="My Profile"
        to="/profile"
        className={`menu_item ${
          location.pathname === "/profile/my-profile" ? "active" : ""
        }`}
      >
        <i className="fa-regular fa-user"></i>
        <span>{t("profile.myprofile")}</span>
      </Link>
    </div>
  );
}

export default ResponsiveNav;

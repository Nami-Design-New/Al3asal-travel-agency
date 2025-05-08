import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

function ResponsiveNav() {
  const { t } = useTranslation();

  return (
    <div className="small_menu">
      <NavLink to="/flights" className="menu_item">
        <i className="fa-regular fa-plane-departure"></i>
        <span>{t("header.flights")}</span>
      </NavLink>

      <NavLink
        aria-label="Flight Booking"
        to="/profile/bookings"
        className="menu_item"
      >
        <i className="fa-regular fa-calendar-range"></i>
        <span>{t("header.myflights")}</span>
      </NavLink>

      <NavLink aria-label="My Profile" to="/profile" className="menu_item" end>
        <i className="fa-regular fa-user"></i>
        <span>{t("header.myprofile")}</span>
      </NavLink>
    </div>
  );
}

export default ResponsiveNav;

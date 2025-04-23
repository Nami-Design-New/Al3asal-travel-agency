import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { setShowAuthModal } from "../../redux/slices/auth";
import SettingDropDown from "./SettingDropDown";

export default function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      window.scrollY > 0
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <div className="nav_items">
          <NavLink to="/">{t("header.home")}</NavLink>
          <NavLink to="/tickets">{t("header.tickets")}</NavLink>
          <NavLink to="/about">{t("header.about")}</NavLink>
          <NavLink to="/contact">{t("header.contact")}</NavLink>
          <NavLink to="/destinations">{t("header.destinations")}</NavLink>
        </div>

        <div className="actions">
          <SettingDropDown />
          <button
            className="login"
            onClick={() => dispatch(setShowAuthModal(true))}
          >
            {t("header.login")}
          </button>
        </div>
      </nav>
    </header>
  );
}

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuthedUserStore } from "../../stores/authedUser";
import { Link, NavLink } from "react-router";
import SettingDropDown from "./SettingDropDown";
import UserDropDown from "./UserDropDown";
import useAuthStore from "../../stores/authStore";

export default function Header() {
  const { t } = useTranslation();
  const { authedUser } = useAuthedUserStore();
  const { openAuthModal } = useAuthStore();

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
          <NavLink to="/flights">{t("header.flights")}</NavLink>
          <NavLink to="/about">{t("header.about")}</NavLink>
          <NavLink to="/contact">{t("header.contact")}</NavLink>
          <NavLink to="/blogs">{t("header.blogs")}</NavLink>
        </div>

        <div className="actions">
          <SettingDropDown />
          {!authedUser.id && (
            <button className="login" onClick={() => openAuthModal(true)}>
              {t("header.login")}
            </button>
          )}

          {authedUser?.id && <UserDropDown userName={authedUser?.name} />}
        </div>
      </nav>
    </header>
  );
}

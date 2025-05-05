import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function UserDropDown() {
  const { t } = useTranslation();
  const userName = "Mariam Samir";

  return (
    <>
      <Dropdown className="d-lg-block d-none">
        <Dropdown.Toggle className="user_dropdown">
          <span>{userName}</span>
          <i className="fa fa-chevron-down"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown-menu text-end">
          <Dropdown.Item href="/my-trips">
            <i className="fa fa-plane"></i>
            {t("header.myflights")}
          </Dropdown.Item>

          <Dropdown.Item href="/my-wallet">
            <i className="fa-solid fa-wallet"></i>
            {t("header.wallet")}
          </Dropdown.Item>

          <Dropdown.Item href="/contact">
            <i className="fa fa-phone"></i>
            {t("header.contactus")}
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item href="/my-profile">
            <i className="fa-regular fa-user"></i>
            {t("profile.myprofile")}
          </Dropdown.Item>

          <Dropdown.Item href="/logout">
            <i className="fa fa-sign-out-alt"></i>
            {t("header.logout")}
          </Dropdown.Item>

          <Dropdown.Item>
            <i className="fa-regular fa-trash-can"></i>
            {t("header.deleteaccount")}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </>
  );
}

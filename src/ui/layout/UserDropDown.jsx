import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import useLogout from "../../hooks/useLogout";

export default function UserDropDown({ userName }) {
  const { t } = useTranslation();
  const { logoutAction } = useLogout();

  return (
    <>
      <Dropdown className="d-lg-block d-none">
        <Dropdown.Toggle className="user_dropdown">
          <span>{userName}</span>
          <i className="fa fa-chevron-down"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown-menu text-end">
          <Dropdown.Item as={Link} to="/profile/bookings">
            <i className="fa-regular fa-plane"></i>
            {t("header.myflights")}
          </Dropdown.Item>

          <Dropdown.Item as={Link} to="/profile">
            <i className="fa-regular fa-user"></i>
            {t("header.myprofile")}
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item as={Link} to="/contact">
            <i className="fa-regular fa-phone"></i>
            {t("header.contactus")}
          </Dropdown.Item>

          <Dropdown.Item onClick={logoutAction}>
            <i className="fa-regular fa-sign-out-alt"></i>
            {t("header.logout")}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

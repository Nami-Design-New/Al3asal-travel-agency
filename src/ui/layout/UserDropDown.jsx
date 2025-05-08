import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function UserDropDown() {
  const { t } = useTranslation();

  return (
    <>
      <Dropdown className="d-lg-block d-none">
        <Dropdown.Toggle className="user_dropdown">
          <span>Ahmed Elsayed</span>
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

          <Dropdown.Item>
            <i className="fa-regular fa-sign-out-alt"></i>
            {t("header.logout")}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

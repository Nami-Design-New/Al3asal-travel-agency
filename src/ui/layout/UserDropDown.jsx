import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function UserDropDown() {
  const { t } = useTranslation();
  const userName = "Mariam Samir";

  return (
    <Dropdown>
      <Dropdown.Toggle className="rounded_btn" id="dropdown-custom-components">
        <span className="fw-bold">{userName}</span>
        <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu text-end">
      {/* <Dropdown.Item href="/profile/payment-methods">
  <i className="fa fa-th-large"></i>
  {t("header.Dashboard")}
</Dropdown.Item> */}
<Dropdown.Item href="/profile">
  <i className="fa fa-th-large "></i>
  {t("header.Dashboard")}
</Dropdown.Item>



        <Dropdown.Item href="/profile">
          <i className="fa fa-plane"></i>
          {t("header.myflights")}
        </Dropdown.Item>

        <Dropdown.Item href="/contact">
          <i className="fa fa-phone"></i>
          {t("header.contactus")}
        </Dropdown.Item>

        <Dropdown.Divider />

        <Dropdown.Item href="/logout">
          <i className="fa fa-sign-out-alt"></i>
          {t("header.logout")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

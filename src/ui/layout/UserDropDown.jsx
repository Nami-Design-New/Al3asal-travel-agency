import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import EditBookingModal from "../modals/EditBookingModal";

export default function UserDropDown() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="rounded_btn">
          <img className="user_img" src="/images/user.png" alt="user_alt" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/my-trips">{t("header.myTrips")}</Dropdown.Item>

          <Dropdown.Item onClick={() => setShowModal(true)}>
            {t("header.editBooking")}
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item  href="/edit-profile">{t("header.myAccount")}</Dropdown.Item>
          <Dropdown.Item>{t("header.logout")}</Dropdown.Item>
          <Dropdown.Item>{t("header.deleteAccount")}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <EditBookingModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

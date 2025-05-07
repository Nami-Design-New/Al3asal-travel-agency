import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function SortingFilter() {
  const { t } = useTranslation();

  return (
    <div className="sorting_header">
      <Dropdown>
        <Dropdown.Toggle className="sorting_btn">
          <i className="fa-regular fa-sliders"></i> {t("flights.sortBy")}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as="div">{t("flights.recommended")}</Dropdown.Item>
          <Dropdown.Item as="div">{t("flights.departureTime")}</Dropdown.Item>
          <Dropdown.Item as="div">{t("flights.duration")}</Dropdown.Item>
          <Dropdown.Item as="div">{t("flights.price")}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="block">
        <h6>{t("flights.sortBy")} :</h6>

        <label htmlFor="recommended" className="check_field">
          <input
            type="radio"
            id="recommended"
            name="sort"
            value="recommended"
          />
          <span>
            {t("flights.recommended")}{" "}
            <i className="fa-sharp fa-solid fa-sort"></i>
          </span>
        </label>
      </div>

      <div className="block">
        <label htmlFor="departureTime" className="check_field">
          <input
            type="radio"
            id="departureTime"
            name="sort"
            value="departureTime"
          />
          <span>
            {t("flights.departureTime")}{" "}
            <i className="fa-sharp fa-solid fa-sort"></i>
          </span>
        </label>
      </div>

      <div className="block">
        <label htmlFor="duration" className="check_field">
          <input type="radio" id="duration" name="sort" value="duration" />
          <span>
            {t("flights.duration")}{" "}
            <i className="fa-sharp fa-solid fa-sort"></i>
          </span>
        </label>
      </div>

      <div className="block">
        <label htmlFor="price" className="check_field">
          <input type="radio" id="price" name="sort" value="price" />
          <span>
            {t("flights.price")} <i className="fa-sharp fa-solid fa-sort"></i>
          </span>
        </label>
      </div>
    </div>
  );
}

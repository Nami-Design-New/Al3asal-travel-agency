import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Travelers() {
  const { t } = useTranslation();
  
  return (
    <Dropdown>
      <Dropdown.Toggle className="filter_btn">
        <i className="fa-light fa-user"></i>
        <span>{t("flights.travelers")}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="travelers_menu">
        <div className="travelers_menu_content">
          <div className="section">
            <h6>{t("flights.adults")}</h6>

            <div className="btns">
              <button type="button" className="btn">
                <i className="fa-regular fa-minus"></i>
              </button>

              <div className="num"> 1 </div>

              <button type="button" className="btn">
                <i className="fa-regular fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="section">
            <h6>
              {t("flights.children")} <strong>(2-11 years)</strong>
            </h6>

            <div className="btns">
              <button type="button" className="btn">
                <i className="fa-regular fa-minus"></i>
              </button>

              <div className="num"> 1 </div>

              <button type="button" className="btn">
                <i className="fa-regular fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="section">
            <h6>
              {t("flights.infants")} <strong>(under 2 years)</strong>
            </h6>

            <div className="btns">
              <button type="button" className="btn">
                <i className="fa-regular fa-minus"></i>
              </button>

              <div className="num"> 1 </div>

              <button type="button" className="btn">
                <i className="fa-regular fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

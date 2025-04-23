import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { currencies } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/slices/settings";
import i18next from "i18next";

export default function SettingDropDown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (selectedLanguage) => {
    dispatch(setLanguage(selectedLanguage));
    localStorage.setItem("lang", selectedLanguage);
    i18next.changeLanguage(selectedLanguage);

    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("en", selectedLanguage === "en");
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>English | USD</Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="input_field">
          <label htmlFor="language">{t("header.changeLanguage")}</label>
          <select
            name="language"
            id="language"
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="ar">العربيه</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="input_field">
          <label htmlFor="language">{t("header.changeCurrency")}</label>
          <select name="currency" id="currency">
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                ( {currency} ) {t(`currencies.${currency}`)}
              </option>
            ))}
          </select>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

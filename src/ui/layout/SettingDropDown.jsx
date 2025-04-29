import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { currencies } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency, setLanguage } from "../../redux/slices/settings";
import i18next from "i18next";

export default function SettingDropDown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.settings);

  const handleLanguageChange = (selectedLanguage) => {
    dispatch(setLanguage(selectedLanguage));
    localStorage.setItem("lang", selectedLanguage);
    i18next.changeLanguage(selectedLanguage);

    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("en", selectedLanguage === "en");
    }
  };

  const handleCurrencyChange = (selectedCurrency) => {
    localStorage.setItem("currency", selectedCurrency);
    dispatch(setCurrency(selectedCurrency));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>
        {i18next.language === "en" ? "English" : "العربيه"} | {currency}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="input_field">
          <label htmlFor="language">{t("header.changeLanguage")}</label>
          <select
            name="language"
            id="language"
            value={i18next.language}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="ar">العربيه</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="input_field">
          <label htmlFor="language">{t("header.changeCurrency")}</label>
          <select
            name="currency"
            id="currency"
            value={currency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
          >
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

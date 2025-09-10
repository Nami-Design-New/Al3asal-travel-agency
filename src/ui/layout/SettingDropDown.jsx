import { Dropdown } from "react-bootstrap";
import i18next from "i18next";
import useSettingsStore from "../../stores/settingsStore";

export default function SettingDropDown() {
  const { setLanguage } = useSettingsStore();

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);

    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("en", selectedLanguage === "en");
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <i className="fa-regular fa-globe"></i>{" "}
        {i18next.language === "en" ? "العربيه" : "English"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLanguageChange("en")}>
          English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange("ar")}>
          العربية
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

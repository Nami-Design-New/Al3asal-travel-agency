import { useTranslation } from "react-i18next";
import FilterFlights from "./FilterFlights";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_text">
          <h1>{t("home.welcome")}</h1>
          <p>{t("home.description")}</p>
        </div>
        <FilterFlights />
      </div>
    </section>
  );
}

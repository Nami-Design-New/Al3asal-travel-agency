import { useTranslation } from "react-i18next";
import HeaderSection from "../ui/layout/HeaderSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderSection />

      <section className="about-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 position-relative order-1">
              <div className="images-wrapper">
                <img
                  src="/images/about.jpg"
                  alt={t("aboutUs.title")}
                  className="main-image img-fluid rounded"
                />
                <img
                  src="/images/app.jpg"
                  alt={t("aboutUs.subtitle")}
                  className="side-image img-fluid rounded"
                />
                <div className="img-shape"></div>
                <div className="floating-image rounded">
                  <img src="/images/about1.jpg" alt="عنصر متحرك" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-0 order-0">
              <div className="about-us-content">
                <h2 className="section-title">{t("aboutUs.title")}</h2>
                <h3 className="section-subtitle">{t("aboutUs.subtitle")}</h3>
                <p className="section-description">
                  {t("aboutUs.description")}
                </p>

                <div className="features-container">
                  <div className="feature-item">
                    <img
                      src="/icons/check.png"
                      alt={t("aboutUs.feature1.title")}
                      className="feature-icon"
                    />
                    <div>
                      <h4 className="feature-title">
                        {t("aboutUs.feature1.title")}
                      </h4>
                      <p className="feature-description">
                        {t("aboutUs.feature1.description")}
                      </p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <img
                      src="/icons/check.png"
                      alt={t("aboutUs.feature2.title")}
                      className="feature-icon"
                    />
                    <div>
                      <h4 className="feature-title">
                        {t("aboutUs.feature2.title")}
                      </h4>
                      <p className="feature-description">
                        {t("aboutUs.feature2.description")}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="discover-more-btn">
                  {t("aboutUs.discoverMore")} <span className="arrow">←</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
};

export default AboutUsSection;

import { useTranslation } from "react-i18next";
import HeaderSection from "../ui/layout/HeaderSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import useGetAboutPage from "../hooks/useGetAboutPage";
import { Link } from "react-router";

const AboutUsSection = () => {
  const { t } = useTranslation();
  const { data } = useGetAboutPage();

  return (
    <>
      <HeaderSection title={data?.title} description={data?.content} />
      <section className="about-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 position-relative order-1">
              <div className="images-wrapper">
                <img
                  src="/images/about.jpg"
                  alt={t("aboutUs.title2")}
                  className="main-image img-fluid rounded"
                />
                <img
                  src="/images/app.jpg"
                  alt={t("aboutUs.subtitle2")}
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
                <h2 className="section-title">{data?.about?.title}</h2>
                <h3 className="section-subtitle">{t("aboutUs.subtitle2")}</h3>
                <p className="section-description">{data?.about?.content}</p>

                <div className="features-container">
                  {data?.about?.data?.slice(0, 3).map((d) => (
                    <div className="feature-item" key={d.id}>
                      <img
                        src="/icons/check.png"
                        alt={t("aboutUs.feature1.title")}
                        className="feature-icon"
                      />
                      <div>
                        <h4 className="feature-title">{d.title}</h4>
                        <p className="feature-description">{d.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/flights" className="discover-more-btn">
                  {t("aboutUs.discoverMore")} <span className="arrow">←</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs whyChooseUs={data?.choose_us_cards} />
    </>
  );
};

export default AboutUsSection;

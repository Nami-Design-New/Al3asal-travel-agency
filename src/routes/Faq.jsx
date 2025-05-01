import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <section className="faq_section">
      <img
        src="/icons/plane-shape2.png"
        alt="Shape"
        className="faq-shape d-none d-md-block"
      />

      <img src="/icons/plane-shape3.png" alt="Shape" className="faq-shape2" />

      <div className="container">
        <div className="section_title mb-5 text-center">
          <h2>{t("faq.sectionTitle")}</h2>
          <p>{t("faq.sectionSubtitle")}</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <ul className="nav flex-column faq_tabs" role="tablist">
              {[1, 2, 3, 4, 5].map((num) => (
                <li
                  key={num}
                  className={`nav-item ${
                    activeTab === `tab${num}` ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(`tab${num}`)}
                >
                  <i className={`fas ${t(`faq.tabs.tab${num}Icon`)}`}></i>{" "}
                  {t(`faq.tabs.tab${num}Title`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-8">
            <div className={`tab-content ${activeTab}`}>
              <p>{t(`faq.answers.${activeTab}`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("privacy.sections.dataCollection"),
      content: (
        <p>{t("privacy.dataCollection.text")}</p>
      ),
    },
    {
      title: t("privacy.sections.dataUsage"),
      content: (
        <p>{t("privacy.dataUsage.text")}</p>
      ),
    },
    {
      title: t("privacy.sections.dataProtection"),
      content: (
        <p>{t("privacy.dataProtection.text")}</p>
      ),
    },
    {
      title: t("privacy.sections.thirdParties"),
      content: (
        <p>{t("privacy.thirdParties.text")}</p>
      ),
    },
    {
      title: t("privacy.sections.contact"),
      content: (
        <p>{t("privacy.contact.text")}</p>
      ),
    },
  ];

  return (
    <div className="container privacy-policy-page py-5">
      <div className="privacy-policy-header">
        <h4>{t("privacy.intro")}</h4>
        <p>
          {t("privacy.lastUpdate", {
            date: new Date().toLocaleDateString("en-GB"),
          })}
        </p>
      </div>

      <div className="privacy-policy-content">
        {sections.map((section, idx) => (
          <section key={idx} className="privacy-policy-section mb-5">
            <h3 className="section-title">{section.title}</h3>
            <div className="section-content">{section.content}</div>
          </section>
        ))}

        <div className="contact-info border-top pt-4 mt-5">
          <h3>{t("privacy.contact.title")}</h3>
          <p>
            <strong>{t("privacy.contact.agency")}</strong>
            <br />
            {t("privacy.contact.phone")}
            <br />
            {t("privacy.contact.email")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

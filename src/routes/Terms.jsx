import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("terms.sections.use"),
      content: (
        <>
          <p>{t("terms.use.text")}</p>
          <h4 className="mt-4">{t("terms.use.restrictions")}</h4>
          <p>{t("terms.use.restrictionsText")}</p>
          <h4 className="mt-4">{t("terms.use.changes")}</h4>
          <p>{t("terms.use.changesText")}</p>
          <h4 className="mt-4">{t("terms.use.privacy")}</h4>
          <p>{t("terms.use.privacyText")}</p>
          <h4 className="mt-4">{t("terms.use.account")}</h4>
          <p>{t("terms.use.accountText")}</p>
        </>
      ),
    },
    {
      title: t("terms.sections.booking"),
      content: (
        <ol>
          {t("terms.booking.items", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ),
    },
    {
      title: t("terms.sections.cancel"),
      content: (
        <ol>
          {t("terms.cancel.items", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ),
    },
    {
      title: t("terms.sections.liability"),
      content: (
        <>
          <h4 className="mt-3">{t("terms.liability.disclaimer")}</h4>
          <p>{t("terms.liability.disclaimerText")}</p>
          <h4 className="mt-3">{t("terms.liability.limits")}</h4>
          <p>{t("terms.liability.limitsText")}</p>
        </>
      ),
    },
    {
      title: t("terms.sections.general"),
      content: (
        <ol>
          {t("terms.general.items", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ),
    },
  ];

  return (
    <div className="container terms-page py-5">
      <div className=" terms-header">
        <h4>{t("terms.intro")}</h4>
        <p>
          {t("terms.lastUpdate", {
            date: new Date().toLocaleDateString("en-GB"),
          })}
        </p>
      </div>

      <div className="terms-content">
        {sections.map((section, idx) => (
          <section key={idx} className="term-section mb-5">
            <h className="section-title">{section.title}</h>
            <div className="section-content">{section.content}</div>
          </section>
        ))}

        <div className="contact-info border-top pt-4 mt-5">
          <h3>{t("terms.contact.title")}</h3>
          <p>
            <strong>{t("terms.contact.agency")}</strong>
            <br />
            {t("terms.contact.phone")}
            <br />
            {t("terms.contact.email")}
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

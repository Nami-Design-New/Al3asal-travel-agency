import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ContactInfo({ settings }) {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: "fa-light fa-phone-volume",
      title: t("contact.callUs"),
      description: t("contact.callDescription"),
      linkText: settings?.phone,
      linkUrl: `tel:${settings?.phone}`,
    },
    {
      icon: "fa-light fa-envelope",
      title: t("contact.helpSupport"),
      description: t("contact.helpDescription"),
      linkText: settings?.email,
      linkUrl: `mailto:${settings?.email}`,
    },
    {
      icon: "fa-light fa-phone-volume",
      title: t("contact.otherHelp"),
      description: t("contact.otherHelpDescription"),
      linkText: settings?.other_phone,
      linkUrl: `tel:${settings?.other_phone}`,
    },
    {
      icon: "fa-light fa-share-alt",
      title: t("contact.followSocialMedia"),
      description: t("contact.followDescription"),
      subLinks: [
        {
          link: settings?.facebook,
          icon: "fa-brands fa-facebook-f",
        },
        {
          link: settings?.twitter,
          icon: "fa-brands fa-twitter",
        },
        {
          link: settings?.instagram,
          icon: "fa-brands fa-instagram",
        },
        {
          link: settings?.linkedin,
          icon: "fa-brands fa-linkedin-in",
        },
      ],
    },
  ];

  return (
    <div className="row">
      {contactInfo.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-12 p-2">
          <div className="contact_info">
            <div className="icon">
              <i className={item.icon}></i>
            </div>
            <h6>{t(item.title)}</h6>
            <p>{t(item.description)}</p>
            <Link to={item.linkUrl}>{item.linkText}</Link>

            {item.subLinks && (
              <div className="social-media">
                <h6>{t("contact.followUs")}</h6>
                {item.subLinks && (
                  <div className="social-media-links">
                    {item.subLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <i className={link.icon}></i>
                        {t(link.name)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

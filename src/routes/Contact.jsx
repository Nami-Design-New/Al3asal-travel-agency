import { useTranslation } from "react-i18next";
import HeaderSection from "../components/home/HeaderSec";

export default function Contact() {
  const { t } = useTranslation(); // استدعاء useTranslation هنا للحصول على دالة t()

  const contactInfo = [
    {
      icon: "fa-light fa-phone-volume",
      title: t("contact.callUs"),
      description: t("contact.callDescription"),
      linkText: "+963964442015",
      linkUrl: "tel:+963964442015",
    },
    {
      icon: "fa-light fa-envelope",
      title: t("contact.helpSupport"),
      description: t("contact.helpDescription"),
      linkText: "info@alasalatravel.com",
      linkUrl: "mailto:info@alasalatravel.com",
    },
    {
      icon: "fa-light fa-phone-volume",
      title: t("contact.otherHelp"),
      description: t("contact.otherHelpDescription"),
      linkText: "+963964442015",
      linkUrl: "tel:+963964442015",
    },
    {
      icon: "fa-light fa-share-alt",
      title: t("contact.followSocialMedia"),
      description: t("contact.followDescription"),
      linkText: t("contact.followUs"),
      linkUrl: "#",
      subLinks: [
        {
          // name: t("contact.facebook"),
          link: "https://facebook.com/yourpage",
          icon: "fa-facebook",
        },
        {
          // name: t("contact.twitter"),
          link: "https://twitter.com/yourhandle",
          icon: "fa-twitter",
        },
        {
          // name: t("contact.instagram"),
          link: "https://instagram.com/yourprofile",
          icon: "fa-instagram",
        },
      ],
    },
  ];

  return (
    <>
      <HeaderSection />

      <section className="contact_section">
        <div className="container">
          <div className="row">
            {contactInfo.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12 p-2">
                <div className="contact_info">
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                  <h6>{t(item.title)}</h6>
                  <p>{t(item.description)}</p>
                  <a href={item.linkUrl}>{item.linkText}</a>

                  {item.subLinks && (
                    <div className="social-media-links">
                      {item.subLinks && (
                        <div className="social-media-links">
                          {item.subLinks.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link"
                            >
                              <i className={`fa-brands ${link.icon} `}></i>
                              {t(link.name)}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.0163117939574!2d36.75817548475612!3d35.13126648032626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1524836a0e2e9cbd%3A0x9dcb0ef5c29d2c0c!2z2LTYsdmD2Kkg2KfZhNi52LPZhCDZhNmE2LPZitin2K3YqSDZiNin2YTYs9mB2LE!5e0!3m2!1sar!2seg!4v1745738385152!5m2!1sar!2seg"
            width="100%"
            height="350"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}

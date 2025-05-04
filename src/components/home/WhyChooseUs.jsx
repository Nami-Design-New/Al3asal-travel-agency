import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const benefits = [
    {
      title: t("benefits.easyBookingTitle"),
      description: t("benefits.easyBookingDescription"),
      image: "/icons/b1.svg",
    },
    {
      title: t("benefits.bestPriceTitle"),
      description: t("benefits.bestPriceDescription"),
      image: "/icons/b2.svg",
    },
    {
      title: t("benefits.support247Title"),
      description: t("benefits.support247Description"),
      image: "/icons/b3.svg",
    },
    {
      title: t("benefits.securePaymentTitle"),
      description: t("benefits.securePaymentDescription"),
      image: "/icons/b4.svg",
    },
  ];

  return (
    <section className="benefits py-5 position-relative">
      <img
        src="/icons/plane-shape2.png"
        alt="Shape"
        className="benefits-shape"
      />

      <div className="container">
        <h2 className="mb-5">{t("benefits.sectionTitle")}</h2>

        <div className="row">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12 p-2">
              <div className="benefit-card h-100 p-4 d-flex align-items-start gap-3">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="benefit-img"
                />
                <div>
                  <h3 className="benefit-title mb-2">{benefit.title}</h3>
                  <p className="benefit-description mb-0">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

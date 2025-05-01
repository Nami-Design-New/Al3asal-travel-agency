import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const benefits = [
    {
      title: t("benefits.easyBookingTitle"),
      description: t("benefits.easyBookingDescription"),
      image: "/icons/b1.png",
    },
    {
      title: t("benefits.bestPriceTitle"),
      description: t("benefits.bestPriceDescription"),
      image: "/icons/b2.png",
    },
    {
      title: t("benefits.support247Title"),
      description: t("benefits.support247Description"),
      image: "/icons/b3.webp",
    },
    {
      title: t("benefits.securePaymentTitle"),
      description: t("benefits.securePaymentDescription"),
      image: "/icons/b4.png",
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
        <div className="row">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="benefit-card text-center">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="benefit-img mb-3"
                />
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

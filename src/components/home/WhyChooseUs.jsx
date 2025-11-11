export default function WhyChooseUs({ whyChooseUs }) {

  return (
    <section className="benefits py-5 position-relative">
      <img
        src="/icons/plane-shape2.png"
        alt="Shape"
        className="benefits-shape"
      />

      <div className="container">
        <h2 className="mb-5">{whyChooseUs?.title}</h2>

        <div className="row">
          {whyChooseUs?.data?.map((benefit) => (
            <div key={benefit?.id} className="col-lg-3 col-md-6 col-12 p-2">
              <div className="benefit-card h-100 p-4 d-flex align-items-start gap-3">
                <img
                  src={benefit?.image}
                  alt={benefit?.title}
                  className="benefit-img"
                />
                <div>
                  <h3 className="benefit-title mb-2">{benefit?.title}</h3>
                  <p className="benefit-description mb-0">
                    {benefit?.description}
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

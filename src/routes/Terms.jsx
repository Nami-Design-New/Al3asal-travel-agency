import useGetTerms from "../hooks/useGetTerms";

const Terms = () => {
  const { data } = useGetTerms();
  const termsData = data?.data || {};
  const contactItems = termsData["For Inquiries"] || [];
  const sections = Object.entries(termsData)
    .filter(([title]) => title !== "For Inquiries")
    .map(([title, items]) => ({ title, items }));

  return (
    <div className="container terms-page py-5">
      <div className=" terms-header">
        <h4>{data?.title || ""}</h4>
      </div>

      <div className="terms-content">
        {sections.map((section, idx) => (
          <section key={idx} className="term-section mb-5">
            <h3 className="section-title">{section.title}</h3>
            <div className="section-content">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item?.content }}
                />
              ))}
            </div>
          </section>
        ))}

        {contactItems.length > 0 && (
          <div className="contact-info border-top pt-4 mt-5">
            <h3>For Inquiries</h3>
            {contactItems.map((item, i) => (
              <div
                key={i}
                dangerouslySetInnerHTML={{ __html: item?.content }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terms;

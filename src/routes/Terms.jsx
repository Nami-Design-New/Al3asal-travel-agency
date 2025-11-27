import useGetTerms from "../hooks/useGetTerms";

const Terms = () => {
  const { data } = useGetTerms();

  const sectionsObject = data?.data || {};

  const sections = Object.entries(sectionsObject).map(([title, items]) => ({
    title,
    items,
  }));

  return (
    <div className="container terms-page py-5">
      {/* Header */}
      <div className="terms-header mb-4">
        <h4>{data?.title || ""}</h4>
      </div>

      {/* Sections */}
      <div className="terms-content">
        {sections?.map((section, idx) => (
          <section key={idx} className="term-section mb-5">
            <h3 className="section-title mb-3">{section.title}</h3>

            <div className="section-content">
              {section.items?.map((item, i) => (
                <div
                  key={i}
                  className="mb-3"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Terms;

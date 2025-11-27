import useGetPrivacy from "../hooks/useGetPrivacy";

const PrivacyPolicy = () => {
  const { data } = useGetPrivacy();
  const raw = data?.data || [];

  return (
    <div className="container terms-page py-5">
      <div className="terms-header mb-4">
        <h4>{data?.title || ""}</h4>
      </div>

      <div className="terms-content">
        {raw.map((section) => (
          <section key={section.id} className="term-section mb-5">
            {section.key && (
              <h3 className="section-title mb-3">{section.key}</h3>
            )}

            {section.content && (
              <div
                className="section-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;

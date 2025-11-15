import useGetPrivacy from "../hooks/useGetPrivacy";

const PrivacyPolicy = () => {
  const { data } = useGetPrivacy();
  const raw = data?.data;
  let grouped = {};
  if (Array.isArray(raw)) {
    raw.forEach((item) => {
      const title = item?.key;
      if (!title) return;
      if (!grouped[title]) grouped[title] = [];
      grouped[title].push({ content: item?.content || "" });
    });
  } else if (raw && typeof raw === "object") {
    grouped = raw;
  }

  const contactTitles = ["For Inquiries", "Contact Us", "Contact Information"];
  const contactItems = contactTitles.flatMap((t) => grouped[t] || []);

  const sections = Object.entries(grouped)
    .filter(([title]) => !contactTitles.includes(title))
    .map(([title, items]) => ({ title, items }));

  return (
    <div className="container terms-page py-5">
      <div className=" terms-header">
        <h4>{data?.title || ""}</h4>
      </div>

      <div className="terms-content">
        {sections?.map((section, idx) => (
          <section key={idx} className="term-section mb-5">
            <h3 className="section-title">{section.title}</h3>
            <div className="section-content">
              {(section.items || []).map((item, i) => (
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

export default PrivacyPolicy;

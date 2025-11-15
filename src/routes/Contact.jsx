import { useTranslation } from "react-i18next";
import HeaderSection from "../ui/layout/HeaderSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import useGetSettings from "../hooks/useGetSettings";

export default function Contact() {
  const { t } = useTranslation();
  const { data } = useGetSettings();

  return (
    <>
      <HeaderSection
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <section className="contact_section">
        <div className="container">
          <ContactInfo settings={data}/>
          <ContactForm />
        </div>

        <div className="map_container">
          <iframe
            src={`https://www.google.com/maps?q=${data?.latitude},${data?.longitude}&hl=ar&z=15&output=embed`}
            width="100%"
            height="350"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

import { useTranslation } from "react-i18next";
import HeaderSection from "../ui/layout/HeaderSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderSection
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <section className="contact_section">
        <div className="container">
          <ContactInfo />
          <ContactForm />
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

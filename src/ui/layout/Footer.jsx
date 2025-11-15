import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router";
import useSubscribeNewsLetter from "../../hooks/useSubscribeNewsLetter";
import useGetSettings from "../../hooks/useGetSettings";
import useSettingsStore from "../../stores/settingsStore";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const { lang } = useSettingsStore();
  const { data } = useGetSettings();
  const { mutate, isPending } = useSubscribeNewsLetter();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(email);
  };

  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-2">
            <div className="logo mb-3">
              <Link to="/" className="logo">
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
            <p className="about">
              {lang === "en"
                ? data?.footer_text?.en || ""
                : data?.footer_text?.ar || ""}
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <Form.Control
                type="email"
                placeholder={t("footer.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                disabled={isPending}
                className="d-flex align-items-center gap-2"
              >
                {t("footer.subscribe")}
                {isPending ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  <i className="fa-solid fa-paper-plane"></i>
                )}
              </button>
            </form>
          </div>

          <div className="col-lg-2 col-md-6 p-2">
            <h5 className="mb-4">{t("footer.usefulLinks")}</h5>
            <ul>
              <li>
                <Link to="/about">{t("footer.about")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contact")}</Link>
              </li>
              <li>
                <Link to="/terms">{t("footer.terms")}</Link>
              </li>
              <li>
                <Link to="/privacy">{t("footer.privacy")}</Link>
              </li>
              <li>
                <Link to="/faq">{t("footer.FAQs")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 p-2">
            <h5 className="mb-4">{t("footer.services")}</h5>
            <ul>
              <li>{t("footer.ser1")}</li>
              <li>{t("footer.ser2")}</li>
              <li>{t("footer.ser3")}</li>
              <li>{t("footer.ser4")}</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 p-2">
            <h5 className="mb-4">{t("footer.contact")}</h5>

            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <Link
                  to={data?.map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === "en"
                    ? data?.address?.en || ""
                    : data?.address?.ar || ""}
                </Link>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <Link to={`mailto:${data?.email}`}>{data?.email}</Link>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <Link to={`mailto:${data?.other_email}`}>
                  {data?.other_email}
                </Link>
              </li>

              <li>
                <i className="fas fa-phone-alt"></i>
                <Link to={`tel:${data?.phone}`}>{data?.phone}</Link>
              </li>

              <li>
                <i className="fab fa-whatsapp"></i>
                <Link to={`tel:${data?.other_phone}`}>{data?.other_phone}</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 p-2">
            <div className="copyrights">
              <p>
                {lang === "en"
                  ? data?.copyright?.en || ""
                  : data?.copyright?.ar || ""}
              </p>

              <div className="social-icons">
                <Link to={data?.facebook || "#"}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to={data?.twitter || "#"}>
                  <img src="/icons/twitter.svg" alt="twitter" />
                </Link>
                <Link to={data?.linkedin || "#"}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to={data?.instagram || "#"}>
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

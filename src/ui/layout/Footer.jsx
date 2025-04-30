import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();
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
            <p className="about">{t("footer.description")}</p>

            <form className="newsletter-form ">
              <Form.Control type="email" placeholder={t("footer.email")} />
              <button>{t("footer.subscribe")}</button>
            </form>
          </div>

          <div className="col-lg-2 col-md-6 p-2">
            <h5 className="mb-4">{t("footer.usefulLinks")}</h5>
            <ul>
              <li>
                <Link to="/">{t("footer.home")}</Link>
              </li>
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
              <li>
                <Link to="/flights">{t("footer.ser1")}</Link>
              </li>
              <li>
                <Link to="/flights">{t("footer.ser2")}</Link>
              </li>
              <li>
                <Link to="/flights">{t("footer.ser3")}</Link>
              </li>
              <li>
                <Link to="/flights">{t("footer.ser4")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 p-2">
            <h5 className="mb-4">{t("footer.contact")}</h5>

            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <Link
                  to="https://maps.app.goo.gl/7GDMHfsN3Z6BkrX47"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  4QJ4+G95، حماة، سوريا
                </Link>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <Link to="mailto:info@alasalatravel.com">
                  info@alasalatravel.com
                </Link>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <Link to="mailto:info@alasalatravel.com">
                  hr@alasalatravel.com
                </Link>
              </li>

              <li>
                <i className="fas fa-phone-alt"></i>
                <Link to="tel:+963964442015">+963964442015</Link>
              </li>

              <li>
                <i className="fab fa-whatsapp"></i>
                <Link to="https://wa.me/963964442015">+963964442015</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 p-2">
            <div className="copyrights">
              <p>
                &copy; {new Date().getFullYear()} {t("footer.copyright")}{" "}
                {t("footer.al3asal")}
              </p>

              <div className="social-icons">
                <Link to="https://www.facebook.com/groups/al3asalofficial/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <img src="/icons/twitter.svg" alt="twitter" />
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="https://www.instagram.com/al3asalofficial/?hl=ar">
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

import { Link } from "react-router";

export default function Contact() {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="contact_info">
              <div className="icon">
                <i className="fa-light fa-phone-volume"></i>
              </div>
              <h6>Call Us</h6>
              <p>
              Call us to speak to a member of our team.
              </p>
              <Link to="tel:+963964442015">+963964442015</Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="contact_info">
              <div className="icon">
                <i className="fa-light fa-envelope"></i>
              </div>
              <h6>Help & support</h6>
              <p>
                For help with a current product or service or refer to FAQs and
                developer tools
              </p>
              <Link to="mailto:info@alasalatravel.com">
                info@alasalatravel.com
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="contact_info">
              <div className="icon">
                <i className="fa-light fa-phone-volume"></i>
              </div>
              <h6>Help & support</h6>
              <p>
                For help with a current product or service or refer to FAQs and
                developer tools
              </p>
              <Link to="tel:+963964442015">+963964442015</Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 p-2">
            <div className="contact_info">
              <div className="icon">
                <i className="fa-light fa-phone-volume"></i>
              </div>
              <h6>Help & support</h6>
              <p>
                For help with a current product or service or refer to FAQs and
                developer tools
              </p>
              <Link to="tel:+963964442015">+963964442015</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.0163117939574!2d36.75817548475612!3d35.13126648032626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1524836a0e2e9cbd%3A0x9dcb0ef5c29d2c0c!2z2LTYsdmD2Kkg2KfZhNi52LPZhCDZhNmE2LPZitin2K3YqSDZiNin2YTYs9mB2LE!5e0!3m2!1sar!2seg!4v1745738385152!5m2!1sar!2seg"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

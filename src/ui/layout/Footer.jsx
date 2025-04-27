// import React from 'react'
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Left column */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="logo mb-3">
              <Link to="/" className="logo">
                <img src="/images/logo.svg" alt="logo" />
              </Link>{" "}
              <p>استكشف العالم</p>
            </div>
            <h5 className="mb-3">اشترك في النشرة الإخبارية</h5>
            <p>احصل على أحدث العروض والتحديثات</p>
            <form className="newsletter-form d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="بريدك الإلكتروني"
              />
              <button className="btn btn-primary">اشترك</button>
            </form>
            <div className="social-icons mt-4">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3">روابط سريعة</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">الرئيسية</a>
              </li>
              <li>
                <a href="#">معلومات عنا</a>
              </li>
              <li>
                <a href="#">المدونة</a>
              </li>
              <li>
                <a href="#">الخدمات</a>
              </li>
              <li>
                <a href="#">الجولات</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
  <h5 className="mb-3">الخدمات</h5>
  <ul className="list-unstyled">
    <li>
      <a href="#">حجوزات تذاكر الطيران</a>
    </li>
    <li>
      <a href="#">برامج سياحية متكاملة</a>
    </li>
    <li>
      <a href="#">حجز فنادق ومنتجعات</a>
    </li>
    <li>
      <a href="#">تأمين تأشيرات السفر</a>
    </li>
    <li>
      <a href="#">تنظيم رحلات شهر عسل</a>
    </li>
  </ul>
</div>


          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">اتصل بنا</h5>
            <ul className="list-unstyled contact-info">
              <li>
                <i className="fas fa-map-marker-alt mx-2"></i>
                <a
                  href="https://maps.google.com/?q=9550 Bolsa Ave #126, USA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9550 Bolsa Ave #126، الولايات المتحدة
                </a>
              </li>
              <li>
                <i className="fas fa-envelope mx-2"></i>
                <a href="mailto:info@alasalatravel.com">
                  info@alasalatravel.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone-alt mx-2"></i>
                <a href="tel:+963964442015">+963964442015</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 border-top">
          <p>جميع الحقوق محفوظة © وكالة العسل للسفر والسياحة</p>
          <a href="#" className="mx-3">
            شروط الاستخدام
          </a>
          <a href="#">سياسة الخصوصية </a>
        </div>
      </div>
    </footer>
  );
}

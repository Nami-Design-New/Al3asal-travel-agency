import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function BlogSection() {
  const { t } = useTranslation();
  return (
    <section className="blog_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="title">
              <h4>{t("blogs.title")}</h4>
              <Link to="/blogs">
                {t("blogs.viewAll")} <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-12 p-2">
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              dir="ltr"
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
              }}
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="blog_card">
                    <div className="img">
                      <img src={`/images/blog${index + 1}.webp`} alt="blog1" />
                    </div>
                    <div className="content">
                      <h5>آخر موعد للعمرة قبل الحج 2025 في هذا التاريخ!</h5>
                      <p>
                        <i className="fa-regular fa-calendar"></i> 23 Apr 2023
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

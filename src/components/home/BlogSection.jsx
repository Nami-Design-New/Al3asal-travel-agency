import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "../../ui/cards/BlogCard";

export default function BlogSection({ blogs }) {
  const { t } = useTranslation();

  return (
    <section className="blog_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="title">
              <h4>{blogs?.title}</h4>
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
              {blogs?.data?.map((blog) => (
                <SwiperSlide key={blog?.id}>
                  <BlogCard
                    title={blog?.title}
                    date={blog?.created_at}
                    image={blog?.image}
                    id={blog?.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

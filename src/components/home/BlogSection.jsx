import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "../../ui/cards/BlogCard"; 

export default function BlogSection() {
  const { t } = useTranslation();

  const blogData = [
    {
      title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات",
      date: "23 Apr 2023",
      image: "/blogs/blog1.jpg",
    },
    {
      title: "تجربة الطيران الشراعي: متعة المغامرة في سماء البحر",
      date: "10 May 2023",
      image: "/blogs/blog2.jpg",
    },
    {
      title: "كيف تخطط لعطلة عائلية مثالية؟ نصائح للسفر مع الأطفال",
      date: "05 Jun 2023",
      image: "/blogs/blog3.jpg",
    },
    {
      title: "أفضل الوجهات الجوية لرحلة صيفية هادئة ومنعشة",
      date: "15 Jul 2023",
      image: "/blogs/blog4.jpg",
    },
    {
      title: "أفضل الوجهات الجوية لرحلة صيفية هادئة ومنعشة",
      date: "15 Jul 2023",
      image: "/blogs/blog5.jpg",
    },
  ];

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
              {blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <BlogCard
                    title={blog.title}
                    date={blog.date}
                    image={blog.image}
                    index={index}
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

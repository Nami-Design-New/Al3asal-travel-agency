import { useTranslation } from "react-i18next";
import HeaderSection from "../ui/layout/HeaderSection";
import BlogCard from "../ui/cards/BlogCard";

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
];

const Blogs = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderSection
        title={t("blogs.title")}
        description={t("blogs.description")}
      />

      <section className="blogs-page">
        <div className="container">
          <div className="row">
            {blogData.map((blog, index) => (
              <div className="col-lg-3 col-md-6 col-12 p-2" key={index}>
                <BlogCard
                  title={blog.title}
                  date={blog.date}
                  image={blog.image}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

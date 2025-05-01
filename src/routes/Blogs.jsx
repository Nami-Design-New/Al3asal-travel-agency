import { useState, useEffect, useCallback } from "react";
import HeaderSection from "../ui/layout/HeaderSection";
import BlogCard from "../ui/cards/BlogCard";
import { useTranslation } from "react-i18next";

const blogData = [
  { title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات", date: "23 Apr 2023", image: "/blogs/blog1.jpg" },
  { title: "تجربة الطيران الشراعي: متعة المغامرة في سماء البحر", date: "10 May 2023", image: "/blogs/blog2.jpg" },
  { title: "كيف تخطط لعطلة عائلية مثالية؟ نصائح للسفر مع الأطفال", date: "05 Jun 2023", image: "/blogs/blog3.jpg" },
  { title: "أفضل الوجهات الجوية لرحلة صيفية هادئة ومنعشة", date: "15 Jul 2023", image: "/blogs/blog4.jpg" },
  { title: "أفضل الوجهات الجوية لرحلة صيفية هادئة ومنعشة", date: "15 Jul 2023", image: "/blogs/blog5.jpg" },
  { title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات", date: "23 Apr 2023", image: "/blogs/blog1.jpg" },
  { title: "تجربة الطيران الشراعي: متعة المغامرة في سماء البحر", date: "10 May 2023", image: "/blogs/blog2.jpg" },
  { title: "كيف تخطط لعطلة عائلية مثالية؟ نصائح للسفر مع الأطفال", date: "05 Jun 2023", image: "/blogs/blog3.jpg" },
  { title: "أفضل الوجهات الجوية لرحلة صيفية هادئة ومنعشة", date: "15 Jul 2023", image: "/blogs/blog4.jpg" },
  { title: "أفضل الوجهات الجوية لرحلة صيفية هادئة ومنعشة", date: "15 Jul 2023", image: "/blogs/blog5.jpg" },
];

const Blogs = () => {
      const { t } = useTranslation();
  
  const blogsPerPage = 6;
  const [currentBlogs, setCurrentBlogs] = useState(blogData.slice(0, blogsPerPage));

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10 &&
      currentBlogs.length < blogData.length
    ) {
      const newBlogs = blogData.slice(0, currentBlogs.length + blogsPerPage);
      setCurrentBlogs(newBlogs);
    }
  }, [currentBlogs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="blogs-page">
       <HeaderSection
      title={t('blogs.title')}
      description={t('blogs.description')}/>

      <div className="container blog-grid mt-5">
        <div className="row">
          {currentBlogs.map((blog, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
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
    </div>
  );
};

export default Blogs;

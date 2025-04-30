import { useState } from "react";
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
    image: "/blogs/blog4.jpg",
  },
  {
    title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات",
    date: "23 Apr 2023",
    image: "/blogs/blog4.jpg",
  },
  {
    title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات",
    date: "23 Apr 2023",
    image: "/blogs/blog4.jpg",
  },
  {
    title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات",
    date: "23 Apr 2023",
    image: "/blogs/blog4.jpg",
  },
  {
    title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات",
    date: "23 Apr 2023",
    image: "/blogs/blog4.jpg",
  },
  {
    title: "استكشاف العجائب الطبيعية: أفضل وجهات السفر لمحبي المغامرات",
    date: "23 Apr 2023",
    image: "/blogs/blog4.jpg",
  },
];

const Blogs = () => {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blogs-page">
      <HeaderSection title="المدونة" />

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

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              {/* Previous Button */}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                </li>
              ))}
              {/* Next Button */}
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
              </li>
          
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

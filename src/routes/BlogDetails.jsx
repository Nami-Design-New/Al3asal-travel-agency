import { useTranslation } from "react-i18next";
import useGetPost from "../hooks/useGetPost";
import useGetPosts from "../hooks/useGetPosts";
import { Link } from "react-router";

const BlogDetails = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetPost();
  const { data: posts, isLoading: postsLoading } = useGetPosts();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      });
    }
  };

  return isLoading || postsLoading ? null : (
    <div className="blog_details_page container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog_header">
            <h1>{data?.title || ""}</h1>

            <div className="tags">
              {data?.tags?.map((tag) => (
                <span key={tag.id || ""}>{tag.name}</span>
              ))}
            </div>

            <div className="blog_header_actions">
              <span className="date">
                {t("lastUpdate")}
                <i className="fa-light fa-calendar-days mx-2"></i>
                {data?.created_at || ""}
              </span>

              <div className="share_section">
                <button className="btn" onClick={handleShare}>
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="blog_image">
            <img src={data?.image || ""} alt="blog" />
          </div>
          <div className="blog_content">
            <div className="content-text">{data?.body || ""}</div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="recent_blogs">
            <h3>{t("recentBlogs")}</h3>
            <ul>
              {posts?.map((blog) => (
                <li key={blog?.id || ""}>
                  <Link to={`/blogs/${blog?.id || ""}`}>
                    <div className="blog_item">
                      <img src={blog?.image || ""} alt={`blog${blog?.id}`} />
                      <div className="blog_info">
                        <h4>{blog?.title || ""}</h4>
                        <span className="date">{blog?.created_at || ""}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

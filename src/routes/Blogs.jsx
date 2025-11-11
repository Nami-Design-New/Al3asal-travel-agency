import HeaderSection from "../ui/layout/HeaderSection";
import BlogCard from "../ui/cards/BlogCard";
import useGetPosts from "../hooks/useGetPosts";

const Blogs = () => {
  const { data, isLoading } = useGetPosts();

  return (
    <>
      <HeaderSection title={data?.title} description={data?.content} />

      <section className="blogs-page">
        <div className="container">
          <div className="row">
            {data?.posts?.map((blog) => (
              <div
                className="col-lg-3 col-md-6 col-12 p-2"
                key={blog?.id || ""}
              >
                <BlogCard
                  title={blog?.title || ""}
                  date={blog?.created_at || ""}
                  image={blog?.image || ""}
                  id={blog?.id || ""}
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

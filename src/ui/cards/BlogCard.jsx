import { Link } from "react-router";

export default function BlogCard({ title, date, image, id }) {
  return (
    <div className="blog_card">
      <Link to={`/blogs/${id}`}>
        <div className="img">
          <img src={image} alt={`blog${id}`} />
        </div>
        <div className="content">
          <h5>{title}</h5>
          <p>
            <i className="fa-regular fa-calendar"></i> {date}
          </p>
        </div>
      </Link>
    </div>
  );
}

import { Link } from "react-router";

export default function BlogCard({ title, date, image, index }) {
  return (
    <div className="blog_card">
      <Link to={`/blogs/${index + 1}`}>
        <div className="img">
          <img src={image} alt={`blog${index + 1}`} />
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

const HeaderSection = ({ title, description }) => {
  return (
    <section className="header-section">
      <div className="shape-left">
        <img src="/images/plane-shape.png" alt={title} />
      </div>
      <div className="shape-right">
        <img src="/images/plane-shape.png" alt={title} />
      </div>

      <div className="container">
        <h1 className="header-title">{title}</h1>
        <p className="header-description">{description}</p>
      </div>
    </section>
  );
};

export default HeaderSection;

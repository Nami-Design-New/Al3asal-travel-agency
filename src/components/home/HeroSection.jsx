import FilterFlights from "../filter/FilterFlights";

export default function HeroSection({ title, description }) {

  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flights_filter">
          <FilterFlights />
        </div>
      </div>
    </section>
  );
}

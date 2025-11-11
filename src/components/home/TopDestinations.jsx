import { Link } from "react-router";

export default function TopDestinations({ topSearched }) {
  return (
    <section className="top_destinations">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <h2>{topSearched?.title}</h2>
            <p>{topSearched?.content}</p>
          </div>

          {topSearched?.data.map((destination) => (
            <div className="col-lg-3 col-md-6 col-12 p-2" key={destination?.id}>
              <Link
                to={`/flights?destination=${destination?.code}`}
                className="destination_card"
              >
                <div className="img">
                  <img
                    src={destination?.image}
                    alt={destination}
                  />
                </div>
                <div className="content">
                  <h3>{destination?.name}</h3>

                  <p>
                    <i className="fa-solid fa-flag-pennant"></i> {destination?.tours_count} Tours
                  </p>
                </div>

                <div className="link">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";

export default function TopDestinations() {
  const { t } = useTranslation();

  const destinations = [
    "Venice",
    "Amsterdam",
    "Budapest",
    "Lisbon",
    "London",
    "Ottawa",
    "Paris",
    "Barcelona",
  ];

  return (
    <section className="top_destinations">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <h2>{t("home.topDestinations")}</h2>
            <p>{t("home.topDestinationsSubtitle")}</p>
          </div>

          {destinations.map((destination, index) => (
            <div className="col-6 col-md-3 p-2" key={index}>
              <div className="destination_card">
                <div className="img">
                  <img
                    src={`/destinations/destination${index + 1}.png`}
                    alt={destination}
                  />
                </div>
                <div className="content">
                  <h3>{destination}</h3>

                  <p>
                    <i className="fa-solid fa-flag-pennant"></i> 356 Tours
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

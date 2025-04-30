import FlightCard from "../ui/cards/FlightCard";

export default function Flights() {
  const flightsDefaults = [
    {
      price: 4907,
      duration: "2h 40m",
      stops: [],
      airlines: [{ name: "Flynas", code: "XY" }],
      departure: { time: "08:00", airport: "SPX" },
      arrival: { time: "10:40", airport: "DMM" },
    },

    {
      price: 8000,
      duration: "5h 40m",
      stops: [
        { name: "Cairo", code: "CAI", duration: "1h 30m", startTime: "07:30" },
      ],
      airlines: [
        { name: "Egypt Air", code: "MS" },
        { name: "Flynas", code: "XY" },
      ],
      departure: { time: "06:00", airport: "SPX" },
      arrival: { time: "11:40", airport: "DMM" },
    },

    {
      price: 9700,
      duration: "7h 10m",
      stops: [
        { name: "Dammam", code: "DMM", duration: "2h 00m", startTime: "10:30" },
      ],
      airlines: [{ name: "Egypt Air", code: "MS" }],
      departure: { time: "07:30", airport: "SPX" },
      arrival: { time: "14:40", airport: "DMM" },
    },

    {
      price: 22000,
      duration: "9h 50m",
      stops: [
        { name: "Cairo", code: "CAI", duration: "2h 00m", startTime: "07:20" },
        { name: "Dammam", code: "DMM", duration: "1h 30m", startTime: "11:20" },
      ],
      airlines: [
        { name: "Emirates", code: "EK" },
        { name: "Flynas", code: "XY" },
      ],
      departure: { time: "05:20", airport: "SPX" },
      arrival: { time: "15:10", airport: "DMM" },
    },
  ];

  return (
    <section className="flights">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2"></div>
        </div>

        <div className="row">
          <div className=" col-12 p-2">
            <div className="results">
              {flightsDefaults.map((flight, index) => (
                <FlightCard key={index} flight={flight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

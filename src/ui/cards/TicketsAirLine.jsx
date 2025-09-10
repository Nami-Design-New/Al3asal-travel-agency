export default function TicketsAirLine({ flight }) {
  const uniqueAirlines = Array.from(
    new Map(flight?.airlines?.map((a) => [a.code, a])).values()
  );

  return (
    <div className="airlines">
      <div className="content">
        <div className="images">
          {uniqueAirlines.map((airline) => (
            <img
              src={`http://img.wway.io/pics/root/${airline.code}@svg`}
              alt={airline.name}
              key={airline.code}
            />
          ))}
        </div>
        <h6>{uniqueAirlines.map((airline) => airline.name).join(", ")}</h6>
      </div>
    </div>
  );
}

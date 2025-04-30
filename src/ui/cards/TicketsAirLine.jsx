export default function TicketsAirLine({ flight }) {
  return (
    <div className="airlines">
      <div className="content">
        <div className="images">
          {flight?.airlines?.map((airline) => (
            <img
              src={`/airlines/${airline.code}.webp`}
              alt={airline.name}
              key={airline.code}
            />
          ))}
        </div>
        <h6>{flight?.airlines?.map((airline) => airline.name).join(", ")}</h6>
      </div>
    </div>
  );
}

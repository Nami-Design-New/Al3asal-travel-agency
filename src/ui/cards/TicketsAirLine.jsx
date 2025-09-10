export default function TicketsAirLine({ flight }) {
  const uniqueAirlines = Array.from(
    new Map(
      flight?.legs?.map((leg) => [
        leg.airline_info.carrier_code,
        {
          code: leg.airline_info.carrier_code,
          name: leg.airline_info.carrier_name,
        },
      ])
    ).values()
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
        <h6>{uniqueAirlines.map((a) => a.name).join(", ")}</h6>
      </div>
    </div>
  );
}

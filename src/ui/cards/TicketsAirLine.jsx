import { useEffect } from "react";
import { storeUniqueAirlines } from "../../utils/storeUniqueAirlines";

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

  const airlineNames = uniqueAirlines.map((a) => a.name);

  useEffect(() => {
    if (airlineNames.length) {
      storeUniqueAirlines(airlineNames);
    }
  }, [airlineNames]);

  return (
    <div className="airlines">
      <div className="content">
        <div className="images">
          {uniqueAirlines.map((airline) => (
            <img
              key={airline.code}
              src={`http://img.wway.io/pics/root/${airline.code}@svg`}
              alt={airline.name}
            />
          ))}
        </div>

        <h6>{airlineNames.join(", ")}</h6>
      </div>
    </div>
  );
}

import { dateTimeDiffCalc } from "./helpers";

export function mapApiFlightToUI(apiFlight) {
  const fare = apiFlight.fares[0]?.fare_info?.fare_detail;
  const totalPrice = fare?.price_info?.total_fare || 0;

  const legs = apiFlight.legs;
  const firstLeg = legs[0];
  const lastLeg = legs[legs.length - 1];

  // first depart
  const departure = {
    time: firstLeg?.departure_info?.date,
    airport: firstLeg?.departure_info?.airport_code,
  };

  // final arrival
  const arrival = {
    time: lastLeg?.arrival_info?.date,
    airport: lastLeg?.arrival_info?.airport_code,
  };

  // total duration in minutes
  const totalDuration = dateTimeDiffCalc(departure.time, arrival.time);

  // build segments
  const segments = [];
  legs.forEach((leg, index) => {
    // flight segment
    segments.push({
      type: "flight",
      code: `${leg.departure_info.airport_code}-${leg.arrival_info.airport_code}`,
      from: leg.departure_info.date,
      to: leg.arrival_info.date,
    });

    // layover segment (if not last leg)
    if (index < legs.length - 1) {
      const nextLeg = legs[index + 1];
      segments.push({
        type: "layover",
        code: leg.arrival_info.airport_code,
        from: leg.arrival_info.date,
        to: nextLeg.departure_info.date,
        name: leg.arrival_info.city_name,
      });
    }
  });

  const airlines = legs.map((leg) => ({
    name: leg.airline_info.carrier_name,
    code: leg.airline_info.carrier_code,
  }));

  return {
    price: totalPrice,
    totalDuration,
    departure,
    arrival,
    airlines,
    segments,
  };
}

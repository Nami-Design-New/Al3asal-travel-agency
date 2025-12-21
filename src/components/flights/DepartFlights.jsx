// import useFlightsStore from "../../stores/flightsStore";
// import useSearchStore from "../../stores/searchStore";
// import FlightCard from "../../ui/cards/FlightCard";

// export default function DepartFlights({
//   flights,
//   setShow,
//   setShowReturnFlights,
// }) {
//   const { setDepartFlight } = useFlightsStore();
//   const { flightsFilter } = useSearchStore();

//   const handleSelect = (flight) => {
//     if (flightsFilter.trip_type === "ONE_WAY") {
//       setShow(true);
//     } else {
//       setShowReturnFlights(true);
//     }

//     setDepartFlight(flight);
//   };
//   console.log("flights", flights);

//   return (
//     <>
//       {flights?.map((flight) => (
//         <FlightCard
//           key={flight?.package_info?.package_key}
//           flight={flight}
//           handleSelect={handleSelect}
//         />
//       ))}
//     </>
//   );
// }

import useFlightsStore from "../../stores/flightsStore";
import useSearchStore from "../../stores/searchStore";
import useGetSettings from "../../hooks/useGetSettings";
import FlightCard from "../../ui/cards/FlightCard";
import { useSearchParams } from "react-router";
import { getFinalPrice } from "../../utils/getFinalPrice";
import { useMemo } from "react";

export default function DepartFlights({
  flights,
  setShow,
  setShowReturnFlights,
}) {
  const { setDepartFlight } = useFlightsStore();
  const { flightsFilter } = useSearchStore();
  const { data: settings } = useGetSettings();
  const [searchParams] = useSearchParams();

  const sort = searchParams.get("sort"); // asc | desc
  const airline = searchParams.get("airline"); // airline name
  const profitPercentage = settings?.profit_percentage || 0;

  const handleSelect = (flight) => {
    if (flightsFilter.trip_type === "ONE_WAY") {
      setShow(true);
    } else {
      setShowReturnFlights(true);
    }
    setDepartFlight(flight);
  };

  //  handle ALL (price + airline)
  const finalFlights = useMemo(() => {
    if (!flights?.length) return [];

    let result = flights.map((flight) => ({
      ...flight,
      finalPrice: getFinalPrice(flight, profitPercentage),
    }));

    //  filter by airline
    if (airline) {
      result = result.filter((flight) =>
        flight.legs?.some((leg) => leg.airline_info?.carrier_name === airline)
      );
    }

    //  sort by price
    if (sort === "asc") {
      result.sort((a, b) => a.finalPrice - b.finalPrice);
    } else if (sort === "desc") {
      result.sort((a, b) => b.finalPrice - a.finalPrice);
    }

    return result;
  }, [flights, airline, sort, profitPercentage]);

  return (
    <>
      {finalFlights.map((flight) => (
        <FlightCard
          key={flight?.package_info?.package_key}
          flight={flight}
          handleSelect={handleSelect}
        />
      ))}
    </>
  );
}

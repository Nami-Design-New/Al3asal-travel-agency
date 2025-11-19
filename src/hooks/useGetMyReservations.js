import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetMyReservations() {
  const { data, isLoading } = useQuery({
    queryKey: ["my-reservations"],
    queryFn: () => getMyReservations(),
  });

  return { data, isLoading };
}

async function getMyReservations() {
  const response = await axiosInstance.get(`/profile/myReservations`);

  if (response.data.code === 200) {
    return transformReservationsData(response.data?.data || {});
  }
  throw new Error("Failed to fetch reservations");
}

function transformReservationsData(apiData) {
  if (!apiData.reservations || apiData.reservations.length === 0) {
    return { trips: [] };
  }

  const trips = apiData.reservations.map((reservation) => {
    const firstBook = reservation.book_details.books[0];
    const firstLeg = reservation.flight_details.depart_flight.legs[0];
    const lastLeg = reservation.flight_details.depart_flight.legs[reservation.flight_details.depart_flight.legs.length - 1];

    return {
      id: reservation.id,
      from: firstLeg.departure_info.airport_code,
      to: lastLeg.arrival_info.airport_code,
      departureTime: formatTime(firstLeg.departure_info.date),
      arrivalTime: formatTime(lastLeg.arrival_info.date),
      duration: calculateTotalDuration(reservation.flight_details.depart_flight.legs),
      stops: getStopsText(reservation.flight_details.depart_flight.legs.length),
      price: `$${reservation.grand_total}`,
      date: formatDate(firstLeg.departure_info.date),
      passengers: firstBook.pax_list.length,
      reservationData: reservation,
    };
  });

  return { trips };
}

function formatTime(dateTimeString) {
  return new Date(dateTimeString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function formatDate(dateTimeString) {
  return new Date(dateTimeString).toISOString().split("T")[0];
}

function calculateTotalDuration(legs) {
  const totalMinutes = legs.reduce(
    (total, leg) => total + leg.time_info.leg_duration_time_minute,
    0
  );
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

function getStopsText(legsCount) {
  const stops = legsCount - 1;
  return stops === 0 ? "Nonstop" : `${stops} stop${stops > 1 ? "s" : ""}`;
}

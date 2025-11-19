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
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch reservations");
}

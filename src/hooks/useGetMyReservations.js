import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { useSearchParams } from "react-router";
import useSettingsStore from "../stores/settingsStore";

export default function useGetMyReservations() {
  const [searchParams] = useSearchParams();
  const { lang } = useSettingsStore();
  const type = searchParams.get("tab") || "current";

  const { data, isLoading } = useQuery({
    queryKey: ["my-reservations", type, lang],
    queryFn: () => getMyReservations(type),
  });

  return { data, isLoading };
}

async function getMyReservations(type) {
  const response = await axiosInstance.get(
    `/profile/myReservations?type=${type}`
  );

  if (response.data.code === 200) {
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch reservations");
}

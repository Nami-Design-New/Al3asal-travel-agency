import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetHome() {
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["home", lang],
    queryFn: () => getHome(),
  });

  return { data, isLoading };
}

async function getHome() {
  const response = await axiosInstance.get(`/home`);
  if (response.data.code === 200) {
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch home");
}

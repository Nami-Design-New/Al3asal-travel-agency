import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetSettings() {
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["settings", lang],
    queryFn: () => getSettings(),
  });

  return { data, isLoading };
}

async function getSettings() {
  const response = await axiosInstance.get(`/settings`);
  if (response.data.code === 200) {
    return response.data?.data?.settings || {};
  }
  throw new Error("Failed to fetch settings");
}

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetProfile(enabled) {
  const { lang } = useSettingsStore();

  return useQuery({
    queryKey: ["profile", lang],
    queryFn: () => getProfile(),
    enabled: enabled,
  });
}

async function getProfile() {
  const response = await axiosInstance.get("/profile");
  if (response.data.code === 200) {
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch profile");
}

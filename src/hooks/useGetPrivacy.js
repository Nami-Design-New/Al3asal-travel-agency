import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetPrivacy() {
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["privacy", lang],
    queryFn: () => getPrivacy(),
  });

  return { data, isLoading };
}

async function getPrivacy() {
  const response = await axiosInstance.get(`/privacy`);
  if (response.data.code === 200) {
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch privacy");
}

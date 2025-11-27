import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetTerms() {
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["terms", lang],
    queryFn: () => getTerms(),
    
  });

  return { data, isLoading };
}

async function getTerms() {
  const response = await axiosInstance.get(`/terms`);
  if (response.data.code === 200) {
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch terms");
}
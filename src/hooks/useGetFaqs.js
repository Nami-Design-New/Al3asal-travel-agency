import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetFaqs() {
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["faqs", lang],
    queryFn: () => getFaqs(),
  });

  return { data, isLoading };
}

async function getFaqs() {
  const response = await axiosInstance.get(`/faqs`);
  if (response.data.code === 200) {
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch faqs");
}

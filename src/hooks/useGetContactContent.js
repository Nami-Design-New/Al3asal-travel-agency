import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetContactContent() {
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["contact-page", lang],
    queryFn: () => getContactContent(),
  });

  return { data, isLoading };
}

async function getContactContent() {
  const response = await axiosInstance.get("/contacts");
  if (response.data.code === 200) {
    return response.data?.data;
  }
  throw new Error("Failed to fetch contact content");
}

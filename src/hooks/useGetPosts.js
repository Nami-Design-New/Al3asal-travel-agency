import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetPosts() {
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["posts", lang],
    queryFn: () => getPosts(),
  });

  return { data, isLoading };
}

async function getPosts() {
  const response = await axiosInstance.get("/posts");
  if (response.data.code === 200) {
    return response.data?.data || [];
  }
  throw new Error("Failed to fetch posts");
}

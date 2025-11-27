import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetPost() {
  const params = useParams();
  const postId = params.id || "";
  const { lang } = useSettingsStore();

  const { data, isLoading } = useQuery({
    queryKey: ["post", postId, lang],
    queryFn: () => getPost(postId),
  });

  return { data, isLoading };
}

async function getPost(postId) {
  const response = await axiosInstance.get(`/posts/${postId}`);
  if (response.data.code === 200) {
    return response.data?.data?.post || {};
  }
  throw new Error("Failed to fetch post");
}

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
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

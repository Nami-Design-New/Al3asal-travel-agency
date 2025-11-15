import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetPrivacy() {
  const { data, isLoading } = useQuery({
    queryKey: ["privacy"],
    queryFn: () => getPrivacy(),
    keepPreviousData: false,
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

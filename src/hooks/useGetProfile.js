import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    keepPreviousData: false,
  });
}

async function getProfile() {
  const response = await axiosInstance.get("/profile");
  if (response.data.code === 200) {
    return response.data?.data || {};
  }
  throw new Error("Failed to fetch profile");
}

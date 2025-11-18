import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetProfile(enabled) {
  return useQuery({
    queryKey: ["profile"],
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

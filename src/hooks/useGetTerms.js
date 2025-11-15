import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetTerms() {

  const { data, isLoading } = useQuery({
    queryKey: ["terms"],
    queryFn: () => getTerms(),
    keepPreviousData: false,
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
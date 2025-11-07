import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetContactContent() {
  const { data, isLoading } = useQuery({
    queryKey: ["contact-page"],
    queryFn: () => getTickets(),
    keepPreviousData: false,
  });

  return { data, isLoading };
}

async function getTickets() {
  const response = await axiosInstance.get("/contacts");
  if (response.data.code === 200) {
    return response.data?.data;
  }
  throw new Error("Failed to fetch tickets");
}

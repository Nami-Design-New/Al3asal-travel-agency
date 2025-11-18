import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetAboutPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["about-page"],
    queryFn: () => getAboutPage(),
    
  });

  return { data, isLoading };
}

async function getAboutPage() {
  const response = await axiosInstance.get("/about");
  if (response.data.code === 200) {
    return response.data?.data;
  }
  throw new Error("Failed to fetch about content");
}

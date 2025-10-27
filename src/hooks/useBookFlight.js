import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../utils/axiosInstance";

export default function useBookFlight() {

  const { mutate: bookFlight, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosInstance.post("/home/book", payload);
      return res;
    },
    onSuccess: (res) => {
      if (res?.data?.code === 200) {
        toast.success("Booking successful!");

        console.log("Booking response:", res.data);
      } else {
        toast.error(res?.data?.message || "Booking failed");
      }
    },
    onError: (error) => {
      console.error("Booking error:", error);
      toast.error("An error occurred during booking");
    },
  });

  return { bookFlight, isPending };
}

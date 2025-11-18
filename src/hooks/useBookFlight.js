import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import axiosInstance from "../utils/axiosInstance";
import { useTranslation } from "react-i18next";

export default function useBookFlight() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function openPaymentPopup(url) {
    const width = 500;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      `${url}`,
      "PaymentPopup",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    window.addEventListener("message", (event) => {
      if (event.data.status === "success") {
        toast.success(t("booking_success"));
        navigate("/");
      } else if (event.data.status === "failed") {
        toast.error(t("booking_error"));
      }
    });
  }

  const { mutate: bookFlight, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosInstance.post("/home/book", payload);
      return res.data;
    },
    onSuccess: (res) => {
      if (res?.code === 200) {
        toast.success("Booking successful!");
        openPaymentPopup(res?.data?.url);
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

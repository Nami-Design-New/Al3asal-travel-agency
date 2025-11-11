import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import axiosInstance from "../utils/axiosInstance";

export default function useSubscribeNewsLetter() {
  const { t } = useTranslation();

  const { mutate, isPending } = useMutation({
    mutationFn: (email) => subscribeNewsLetter(email),

    onSuccess: (data) => {
      if (data.data.code === 200) {
        toast.success(t("subscribedSuccessfully"));
      } else {
        toast.error(data.data?.message || t("failedToSubscribe"));
      }
    },
  });

  return { mutate, isPending };
}

const subscribeNewsLetter = async (email) => {
  return await axiosInstance.post("/news-letters", {
    email,
  });
};

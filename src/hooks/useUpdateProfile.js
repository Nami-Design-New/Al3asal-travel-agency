import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../utils/axiosInstance";
import { useTranslation } from "react-i18next";

export default function useUpdateProfile() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/profile/update", {
        ...data,
        _method: "put",
      });

      return response.data;
    },

    onSuccess: (data) => {
      if (data.code === 200) {
        toast.success(t("profile_updated_success"));
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      } else {
        toast.error(t("profile_update_error"));
      }
    },
  });
}

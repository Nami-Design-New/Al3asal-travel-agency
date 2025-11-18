import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAuthedUserStore } from "../stores/authedUser";
import { useTranslation } from "react-i18next";
import axiosInstance from "../utils/axiosInstance";

export default function useDeleteAccount() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { clearAuthedUser } = useAuthedUserStore();
  const [, , removeCookies] = useCookies(["token"]);

  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.delete("/profile/delete");
      return response.data;
    },

    onSuccess: (res) => {
      if (res.code === 200) {
        toast.success(t("account_deleted"));
        queryClient.clear();
        navigate("/", { replace: true });
        removeCookies("token");
        clearAuthedUser();
      }
    },
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useAuthedUserStore } from "../stores/authedUser";
import { useCookies } from "react-cookie";
import axiosInstance from "../utils/axiosInstance";

export default function useLogout() {
  const { clearAuthedUser } = useAuthedUserStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [, , removeCookies] = useCookies(["token"]);

  const { mutate: logoutAction, isPending } = useMutation({
    mutationFn: () => axiosInstance.post("/auth/logout"),

    onSuccess: (res) => {
      if (res.data.code === 200) {
        queryClient.clear();
        navigate("/", { replace: true });
        removeCookies("token");
        clearAuthedUser();
      }
    },
  });

  return { logoutAction, isPending };
}

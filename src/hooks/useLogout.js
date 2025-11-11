import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useAuthedUserStore } from "../stores/authedUser";
import { useCookies } from "react-cookie";
import axiosInstance from "../utils/axiosInstance";
import { useEffect } from "react";

export default function useLogout() {
  const { clearAuthedUser } = useAuthedUserStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [cookie, , removeCookies] = useCookies(["token"]);
  const token = cookie.token || "";

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [token]);

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

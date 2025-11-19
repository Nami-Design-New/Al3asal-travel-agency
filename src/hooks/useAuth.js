import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useAuthedUserStore } from "../stores/authedUser";
import axiosInstance from "../utils/axiosInstance";
import useGetProfile from "./useGetProfile";

export default function useAuth() {
  const { setAuthedUser, clearAuthedUser } = useAuthedUserStore();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const token = cookies.token;

  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
      removeCookie("token", { path: "/" });
      clearAuthedUser();
    }
  }, [token, removeCookie, clearAuthedUser]);

  const { data: profile, isLoading, error } = useGetProfile(!!token);

  useEffect(() => {
    if (profile) {
      setAuthedUser(profile);
    }
  }, [profile, setAuthedUser]);

  return {
    loading: isLoading,
    isAuthed: !!profile && !error,
  };
}

import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import axiosInstance from "../../../utils/axiosInstance";

export default function GoogleBtn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["token"]);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axiosInstance.post("/user/social_login", {
          login_from: "google",
          google_token: tokenResponse.access_token,
        });

        if (res.data.code === 200) {
          toast.success(t("auth.loginSuccess"));
          setCookie("token", res.data.data.token, {
            path: "/",
            secure: true,
            sameSite: "Strict",
          });
          setCookie("id", res.data.data.id, {
            path: "/",
            secure: true,
            sameSite: "Strict",
          });
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `${res.data.data.token}`;
          navigate("/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || t("auth.loginErorr"));
        throw new Error(error.message);
      }
    },
    onError: (error) => {
      console.log("Google Login Error:", error);
      toast.error(error.response.data.message);
    },
  });

  return (
    <button onClick={handleGoogleLogin}>
      <img src="/icons/google.svg" alt="google" /> {t("auth.loginWithGoogle")}
    </button>
  );
}

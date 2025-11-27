import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axiosInstance";
import useAuthStore from "../../stores/authStore";

export default function GoogleBtn() {
  const { t } = useTranslation();
  const [, setCookie] = useCookies(["token"]);
  const { closeAuthModal } = useAuthStore();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        if (!userInfoResponse.ok) {
          throw new Error("Failed to fetch user info from Google");
        }

        const userData = await userInfoResponse.json();

        const payload = {
          email: userData.email,
          name: userData.name,
          image: userData.picture,
          provider: "google",
          provider_id: userData.id,
        };

        const res = await axiosInstance.post("/auth/social-login", payload);

        if (res.data.code === 200) {
          toast.success(t("auth.loginSuccess"));
          setCookie("token", res.data.data.auth.token, {
            path: "/",
            secure: true,
            sameSite: "Strict",
          });
          closeAuthModal();
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.error("Google Login Error:", error);
        toast.error(error?.response?.data?.message || t("auth.loginError"));
      }
    },
    onError: (error) => {
      console.log("Google Login Error:", error);
      toast.error(t("auth.googleLoginError"));
    },
  });

  return (
    <button onClick={handleGoogleLogin}>
      <img src="/icons/google.svg" alt="google" /> {t("auth.loginWithGoogle")}
    </button>
  );
}

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import OtpContainer from "../../../ui/forms/OtpContainer";
import SubmitButton from "../../../ui/forms/SubmitButton";
import axiosInstance from "../../../utils/axiosInstance";
import useAuthStore from "../../../stores/authStore";

export default function VerifyRegister() {
  const { t } = useTranslation();
  const [, setCookie] = useCookies();
  const [code, setCode] = useState();
  const { phone, closeAuthModal } = useAuthStore();
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const mutatation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/auth/verify-account", {
        ...phone,
        code,
      });
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.code === 200) {
        setCookie("token", data.data?.auth?.token, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
        closeAuthModal();
        toast.success(data?.message || t("auth.accountVerified"));
      } else {
        toast.error(data?.message || t("auth.somethingWentWrong"));
      }
    },
    onError: (error) => {
      toast.error(error.message || t("auth.somethingWentWrong"));
    },
  });

  const handleResend = async () => {
    try {
      const res = await axiosInstance.post("/auth/resend-verification-code", {
        ...phone,
        code,
      });
      if (res.data.code === 200) {
        toast.success(t("auth.resetLinkSent"));
        setResendDisabled(true);
        setTimer(60);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutatation.mutate();
  };

  return (
    <>
      <div>
        <h5>{t("auth.enterCode")}</h5>
        <p>{t("auth.enterCodeSubtitle")}</p>
      </div>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <OtpContainer setCode={setCode} />
        <div className="resend_code">
          <span className={`resend_link ${resendDisabled ? "disabled" : ""}`}>
            {t("auth.resend")}{" "}
            <span style={{ cursor: "pointer" }} onClick={handleResend}>
              {t("auth.resendCode")}
            </span>
          </span>

          <div
            className="timer flex-row-reverse"
            style={{ justifyContent: "end !important" }}
          >
            <span>
              {Math.floor(timer / 60)
                .toString()
                .padStart(2, "0")}
            </span>
            :<span>{(timer % 60).toString().padStart(2, "0")}</span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 mt-2">
          <SubmitButton
            text={t("auth.confirm")}
            loading={mutatation.isPending}
          />
        </div>
      </form>
    </>
  );
}

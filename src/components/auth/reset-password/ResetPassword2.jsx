import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import SubmitButton from "../../../ui/forms/SubmitButton";
import OtpContainer from "../../../ui/forms/OtpContainer";
import useAuthStore from "../../../stores/authStore";
import axiosInstance from "../../../utils/axiosInstance";

export default function ResetPassword2() {
  const { t } = useTranslation();
  const [, setCookie] = useCookies();
  const [code, setCode] = useState("");
  const { setStep, phone } = useAuthStore();

  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

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
      const response = await axiosInstance.post("/auth/confirm-code", {
        ...phone,
        code,
      });
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.code === 200) {
        setStep("reset3");
        setCookie("token", data.data?.auth?.token, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
        toast.success(data?.message || t("auth.codeConfirmed"));
      } else {
        toast.error(data?.message || t("auth.somethingWentWrong"));
      }
    },
    onError: (error) => {
      toast.error(error.message || t("auth.somethingWentWrong"));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutatation.mutate();
  };

  const handleBack = () => {
    setStep("reset1");
  };

  const handleResend = async () => {
    if (resendDisabled) return;

    try {
      setResendDisabled(true);
      setTimer(60);

      const res = await axiosInstance.post("/auth/resend-verification-code", {
        ...phone,
        code,
      });

      if (res.data.code === 200) {
        toast.success(t("auth.resetLinkSent"));
      } else {
        toast.error(res.data.message || t("auth.somethingWentWrong"));
        setResendDisabled(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || t("auth.somethingWentWrong")
      );
      setResendDisabled(false);
    }
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
            <span
              style={{
                cursor: resendDisabled ? "not-allowed" : "pointer",
                opacity: resendDisabled ? 0.5 : 1,
                pointerEvents: resendDisabled ? "none" : "auto",
              }}
              onClick={handleResend}
            >
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
          <div className="back_btn" onClick={handleBack}>
            <i className="fa-regular fa-arrow-left-long"></i>
          </div>
          <SubmitButton
            text={t("auth.confirm")}
            loading={mutatation.isPending}
          />
        </div>
      </form>
    </>
  );
}

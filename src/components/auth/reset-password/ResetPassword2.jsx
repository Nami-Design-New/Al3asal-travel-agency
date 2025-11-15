import { useTranslation } from "react-i18next";
import { useState } from "react";
import SubmitButton from "../../../ui/forms/SubmitButton";
import OtpContainer from "../../../ui/forms/OtpContainer";
import useAuthStore from "../../../stores/authStore";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "sonner";

export default function ResetPassword2() {
  const { t } = useTranslation();
  const [code, setCode] = useState("");
  const { setStep, phone } = useAuthStore();

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

  return (
    <>
      <div>
        <h5>{t("auth.enterCode")}</h5>
        <p>{t("auth.enterCodeSubtitle")}</p>
      </div>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <OtpContainer setCode={setCode} />
        <div className="resend_code">
          <h6>{t("auth.resend")}</h6>
          <p>00:59</p>
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

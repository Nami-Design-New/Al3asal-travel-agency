import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import * as yup from "yup";
import PasswordField from "../../../ui/forms/PasswordField";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useAuthStore from "../../../stores/authStore";
import axiosInstance from "../../../utils/axiosInstance";

export default function ResetPassword3() {
  const { t } = useTranslation();
  const { setStep } = useAuthStore();

  const handleBack = () => {
    setStep("reset2");
  };

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(t("validation.required"))
      .min(6, t("validation.min", { min: 6 })),
    password_confirmation: yup
      .string()
      .required(t("validation.required"))
      .oneOf([yup.ref("password"), null], t("validation.passwordMismatch")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const mutatation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/auth/update-password", data);
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.code === 200) {
        setStep("login");
        toast.success(data?.message || t("auth.passwordResetSuccess"));
      } else {
        toast.error(data?.message || t("auth.somethingWentWrong"));
      }
    },
    onError: (error) => {
      toast.error(error.message || t("auth.somethingWentWrong"));
    },
  });

  return (
    <>
      <div>
        <h5>{t("auth.resetPassword")}</h5>
        <p>{t("auth.resetPasswordSubtitle")}</p>
      </div>

      <form className="form_ui mt-5" onSubmit={handleSubmit(mutatation.mutate)}>
        <PasswordField
          label={t("auth.newPassword")}
          placeholder={t("auth.enterNewPassword")}
          {...register("password")}
          error={errors.password?.message}
        />

        <PasswordField
          label={t("auth.confirmPassword")}
          placeholder={t("auth.enterConfirmPassword")}
          {...register("password_confirmation")}
          error={errors.password_confirmation?.message}
        />

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

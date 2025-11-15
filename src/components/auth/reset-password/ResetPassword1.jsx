import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useAuthStore from "../../../stores/authStore";
import PhoneField from "../../../ui/forms/PhoneField";
import axiosInstance from "../../../utils/axiosInstance";

export default function ResetPassword1() {
  const { t } = useTranslation();
  const { setStep, setPhone } = useAuthStore();

  const handleBack = () => {
    setStep("login");
  };

  const handlePhoneChange = (value, country) => {
    setValue("phone_code", `+${country.dialCode}`);
    setValue("phone", value.replace(country.dialCode, ""));
  };

  const methods = useForm({
    defaultValues: {
      phone: "",
      phone_code: "",
    },
    mode: "onChange",
  });

  const { handleSubmit, setValue } = methods;

  const mutatation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/auth/forget-password", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.code === 200) {
        setStep("reset2");
        toast.success(data?.message || t("auth.otpSent"));
      } else {
        toast.error(data?.message || t("auth.somethingWentWrong"));
      }
    },
    onError: (error) => {
      toast.error(error.message || t("auth.somethingWentWrong"));
    },
  });

  const onSubmit = (data) => {
    setPhone({
      phone_code: data.phone_code,
      phone: data.phone,
    }),
      mutatation.mutate(data);
  };

  return (
    <>
      <div>
        <h5>{t("auth.forgetTitle")}</h5>
        <p>{t("auth.forgetSubtitle")}</p>
      </div>

      <FormProvider {...methods}>
        <form className="form_ui mt-5" onSubmit={handleSubmit(onSubmit)}>
          <PhoneField
            label={t("auth.phoneNumber")}
            name="phone"
            handleChange={handlePhoneChange}
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
      </FormProvider>
    </>
  );
}

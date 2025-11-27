import { useTranslation } from "react-i18next";
import PhoneField from "../../../ui/forms/PhoneField";
import PasswordField from "../../../ui/forms/PasswordField";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useAuthStore from "../../../stores/authStore";
import useLogin from "./useLogin";
import { FormProvider } from "react-hook-form";
import GoogleBtn from "../GoogleBtn";

export default function Login() {
  const { t } = useTranslation();
  const { setStep } = useAuthStore();
  const { methods, handleSubmit, isLoading } = useLogin(t);

  const {
    setValue,
    register,
    formState: { errors },
  } = methods;

  const handlePhoneChange = (value, country) => {
    setValue("phone_code", `+${country.dialCode}`);
    setValue("phone", value.replace(country.dialCode, ""));
  };

  return (
    <>
      <div>
        <h5>{t("auth.loginTitle")}</h5>
        <p>{t("auth.loginSubtitle")}</p>
      </div>

      <FormProvider {...methods}>
        <form className="form_ui" onSubmit={handleSubmit}>
          <PhoneField
            label={t("auth.phoneNumber")}
            name="phone"
            handleChange={handlePhoneChange}
            error={errors.phone?.message}
          />

          <PasswordField
            label={t("auth.password")}
            placeholder={t("auth.enterPassword")}
            {...register("password")}
            error={errors.password?.message}
          />

          <span className="forgot_password" onClick={() => setStep("reset1")}>
            {t("auth.forgotPassword")}
          </span>

          <SubmitButton text={t("auth.login")} loading={isLoading} />

          <div className="or">
            <span>{t("auth.or")}</span>
          </div>

          <div className="socials_login">
            <GoogleBtn/>
            
            {/* <button>
              <img src="/icons/apple.svg" alt="google" />{" "}
              {t("auth.loginWithApple")}
            </button> */}
          </div>

          <p className="register_link">
            {t("auth.dontHaveAccount")}{" "}
            <span onClick={() => setStep("register")}>
              {t("auth.createAccount")}
            </span>
          </p>
        </form>
      </FormProvider>
    </>
  );
}

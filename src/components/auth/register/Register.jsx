import { useTranslation } from "react-i18next";
import { FormProvider } from "react-hook-form";
import InputField from "../../../ui/forms/InputField";
import PasswordField from "../../../ui/forms/PasswordField";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useAuthStore from "../../../stores/authStore";
import useRegister from "./useRegister";
import PhoneField from "../../../ui/forms/PhoneField";

export default function Register() {
  const { t } = useTranslation();
  const { setStep } = useAuthStore();
  const { handleSubmit, methods, isLoading } = useRegister(t);

  const handlePhoneChange = (value, country) => {
    methods.setValue("phone_code", `+${country.dialCode}`);
    methods.setValue("phone", value.replace(country.dialCode, ""));
  };

  return (
    <>
      <div>
        <h5>{t("auth.registerTitle")}</h5>
        <p>{t("auth.registerSubtitle")}</p>
      </div>

      <FormProvider {...methods}>
        <form className="form_ui" onSubmit={handleSubmit}>
          <InputField
            label={t("auth.fullName")}
            placeholder={t("auth.enterYourName")}
            {...methods.register("name")}
            error={methods.formState.errors.name?.message}
          />

          <PhoneField
            label={t("auth.phoneNumber")}
            name="phone"
            handleChange={handlePhoneChange}
            error={methods.formState.errors.phone?.message}
          />

          <InputField
            label={t("auth.emailAddress")}
            placeholder={t("auth.enterEmailAddress")}
            {...methods.register("email")}
            error={methods.formState.errors.email?.message}
          />

          <PasswordField
            label={t("auth.password")}
            placeholder={t("auth.enterPassword")}
            {...methods.register("password")}
            error={methods.formState.errors.password?.message}
          />

          <SubmitButton
            className={"mt-2"}
            loading={isLoading}
            text={t("auth.createAccount")}
          />

          <div className="or">
            <span>{t("auth.or")}</span>
          </div>

          <div className="socials_login">
            <button>
              <img src="/icons/google.svg" alt="google" />{" "}
              {t("auth.loginWithGoogle")}
            </button>
            <button>
              <img src="/icons/apple.svg" alt="google" />{" "}
              {t("auth.loginWithApple")}
            </button>
          </div>

          <p className="register_link">
            {t("auth.alreadyHaveAccount")}{" "}
            <span onClick={() => setStep("login")}>{t("auth.login")}</span>
          </p>
        </form>
      </FormProvider>
    </>
  );
}

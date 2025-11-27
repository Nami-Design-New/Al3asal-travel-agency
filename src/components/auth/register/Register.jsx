import { useTranslation } from "react-i18next";
import { FormProvider } from "react-hook-form";
import InputField from "../../../ui/forms/InputField";
import PasswordField from "../../../ui/forms/PasswordField";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useAuthStore from "../../../stores/authStore";
import useRegister from "./useRegister";
import PhoneField from "../../../ui/forms/PhoneField";
import GoogleBtn from "../GoogleBtn";
import GenderSelect from "../../../ui/forms/GenderSelect";

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

          <GenderSelect
            name="gender"
            label={t("profile.gender")}
            value={methods.watch("gender")}
            onChange={(e) => methods.setValue("gender", e.target.value)}
            error={methods.formState.errors.gender?.message}
          />

          <PasswordField
            label={t("auth.password")}
            placeholder={t("auth.enterPassword")}
            {...methods.register("password")}
            error={methods.formState.errors.password?.message}
          />

          <PasswordField
            label={t("auth.confirmPassword")}
            placeholder={t("auth.confirmPassword")}
            {...methods.register("confirm_password")}
            error={methods.formState.errors.confirm_password?.message}
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
            <GoogleBtn />
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

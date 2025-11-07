import { useTranslation } from "react-i18next";
import InputField from "../../../ui/forms/InputField";
import PasswordField from "../../../ui/forms/PasswordField";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useAuthStore from "../../../stores/authStore";
import useRegister from "./useRegister";

export default function Register() {
  const { t } = useTranslation();
  const { setStep } = useAuthStore();
  const { register, handleSubmit, errors, isLoading } = useRegister(t);

  return (
    <>
      <div>
        <h5>{t("auth.registerTitle")}</h5>
        <p>{t("auth.registerSubtitle")}</p>
      </div>

      <form className="form_ui" onSubmit={handleSubmit}>
        <InputField
          label={t("auth.fullName")}
          placeholder={t("auth.enterYourName")}
          {...register("name")}
          error={errors.name?.message}
        />

        <InputField
          label={t("auth.emailAddress")}
          placeholder={t("auth.enterEmailAddress")}
          {...register("email")}
          error={errors.email?.message}
        />

        <PasswordField
          label={t("auth.password")}
          placeholder={t("auth.enterPassword")}
          {...register("password")}
          error={errors.password?.message}
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
    </>
  );
}

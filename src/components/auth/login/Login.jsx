import { useTranslation } from "react-i18next";
import InputField from "../../../ui/forms/InputField";
import PasswordField from "../../../ui/forms/PasswordField";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useAuthStore from "../../../stores/authStore";
import useLogin from "./useLogin";

export default function Login() {
  const { t } = useTranslation();
  const { setStep } = useAuthStore();
  const { register, handleSubmit, errors, isLoading } = useLogin(t);

  return (
    <>
      <div>
        <h5>{t("auth.loginTitle")}</h5>
        <p>{t("auth.loginSubtitle")}</p>
      </div>

      <form className="form_ui" onSubmit={handleSubmit}>
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

        <span className="forgot_password" onClick={() => setStep("reset1")}>
          {t("auth.forgotPassword")}
        </span>

        <SubmitButton text={t("auth.login")} loading={isLoading} />

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
          {t("auth.dontHaveAccount")}{" "}
          <span onClick={() => setStep("register")}>
            {t("auth.createAccount")}
          </span>
        </p>
      </form>
    </>
  );
}

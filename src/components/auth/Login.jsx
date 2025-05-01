import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/slices/auth";
import InputField from "./../../ui/forms/InputField";
import PasswordField from "../../ui/forms/PasswordField";
import SubmitButton from "./../../ui/forms/SubmitButton";

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h5>{t("auth.loginTitle")}</h5>
        <p>{t("auth.loginSubtitle")}</p>
      </div>

      <form className="form_ui">
        <InputField
          label={t("auth.emailAddress")}
          placeholder={t("auth.enterEmailAddress")}
        />

        <PasswordField
          label={t("auth.password")}
          placeholder={t("auth.enterPassword")}
        />

        <span
          className="forgot_password"
          onClick={() => dispatch(setStep("reset1"))}
        >
          {t("auth.forgotPassword")}
        </span>

        <SubmitButton text={t("auth.login")} />

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
          <span onClick={() => dispatch(setStep("register"))}>
            {t("auth.createAccount")}
          </span>
        </p>
      </form>
    </>
  );
}

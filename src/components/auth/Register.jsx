import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/slices/auth";
import InputField from "../../ui/forms/InputField";
import PasswordField from "../../ui/forms/PasswordField";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function Register() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h5>{t("auth.registerTitle")}</h5>
        <p>{t("auth.registerSubtitle")}</p>
      </div>

      <form className="form_ui">
        <InputField
          label={t("auth.fullName")}
          placeholder={t("auth.enterYourName")}
        />

        <InputField
          label={t("auth.emailAddress")}
          placeholder={t("auth.enterEmailAddress")}
        />

        <PasswordField
          label={t("auth.password")}
          placeholder={t("auth.enterPassword")}
        />

        <SubmitButton className={"mt-2"} text={t("auth.createAccount")} />

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
          <span onClick={() => dispatch(setStep("login"))}>
            {t("auth.login")}
          </span>
        </p>
      </form>
    </>
  );
}

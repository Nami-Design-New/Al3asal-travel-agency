import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/slices/auth";
import PasswordField from "./../../ui/forms/PasswordField";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function ResetPassword3() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setStep("reset2"));
  };

  return (
    <>
      <div>
        <h5>{t("auth.resetPassword")}</h5>
        <p>{t("auth.resetPasswordSubtitle")}</p>
      </div>

      <form className="form_ui mt-5">
        <PasswordField
          label={t("auth.newPassword")}
          placeholder={t("auth.enterNewPassword")}
        />

        <PasswordField
          label={t("auth.confirmPassword")}
          placeholder={t("auth.enterConfirmPassword")}
        />

        <div className="d-flex align-items-center gap-2 mt-2">
          <div className="back_btn" onClick={handleBack}>
            <i className="fa-regular fa-arrow-left-long"></i>
          </div>
          <SubmitButton text={t("auth.confirm")} />
        </div>
      </form>
    </>
  );
}

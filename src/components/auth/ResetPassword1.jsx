import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";
import useAuthStore from "../../stores/authStore";

export default function ResetPassword1() {
  const { t } = useTranslation();
  const { setStep } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("reset2");
  };

  const handleBack = () => {
    setStep("login");
  };

  return (
    <>
      <div>
        <h5>{t("auth.forgetTitle")}</h5>
        <p>{t("auth.forgetSubtitle")}</p>
      </div>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <InputField
          label={t("auth.emailAddress")}
          placeholder={t("auth.enterEmailAddress")}
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

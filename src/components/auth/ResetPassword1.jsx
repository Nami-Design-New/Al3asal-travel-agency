import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function ResetPassword1() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h5>{t("auth.registerTitle")}</h5>
        <p>{t("auth.registerSubtitle")}</p>
      </div>

      <form className="form_ui">
        <InputField
          label={t("auth.emailAddress")}
          placeholder={t("auth.enterEmailAddress")}
        />

        <SubmitButton className={"mt-2"} text={t("auth.createAccount")} />
      </form>
    </>
  );
}

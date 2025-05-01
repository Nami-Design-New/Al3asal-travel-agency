import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/slices/auth";
import SubmitButton from "../../ui/forms/SubmitButton";
import OtpContainer from "./../../ui/forms/OtpContainer";

export default function ResetPassword2() {
  const { t } = useTranslation();
  const [, setCode] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setStep("reset3"));
  };

  const handleBack = () => {
    dispatch(setStep("reset1"));
  };

  return (
    <>
      <div>
        <h5>{t("auth.enterCode")}</h5>
        <p>{t("auth.enterCodeSubtitle")}</p>
      </div>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <OtpContainer setCode={setCode} />
        <div className="resend_code">
          <h6>{t("auth.resend")}</h6>
          <p>00:59</p>
        </div>

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

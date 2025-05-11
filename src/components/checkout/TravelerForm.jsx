import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import ReactFlagsSelect from "react-flags-select";
import GenderSelect from "../../ui/forms/GenderSelect";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function TravelerForm({
  title,
  index,
  active,
  setActive,
  isLast,
}) {
  const { t } = useTranslation();
  return (
    <>
      <div className="line"></div>
      <div className="col-12 p-2">
        <div className="title">
          <h6>{title}</h6>
          {active !== index && index < active && (
            <span onClick={() => setActive(index)}>
              {t("checkoutForm.edit")}
            </span>
          )}
        </div>
      </div>

      {active === index ? (
        <>
          <div className="col-lg-6 col-12 p-2">
            <InputField
              label={t("checkoutForm.fullName")}
              placeholder={t("checkoutForm.enterName")}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField type="date" label={t("checkoutForm.dateOfBirth")} />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              type="number"
              label={t("checkoutForm.passportNumber")}
              placeholder={t("checkoutForm.enterPassportNumber")}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              type="date"
              label={t("checkoutForm.passportExpiryDate")}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <div className="input-field">
              <label>{t("checkoutForm.nationality")}</label>
              <ReactFlagsSelect selected="SY" />
            </div>
          </div>

          <div className="col-lg-6 col-12 p-2">
            <GenderSelect />
          </div>

          {!isLast && (
            <div
              className="col-12 p-2 mt-2"
              onClick={() => setActive(index + 1)}
            >
              <SubmitButton text={t("checkoutForm.nextTraveler")} />
            </div>
          )}
        </>
      ) : null}
    </>
  );
}

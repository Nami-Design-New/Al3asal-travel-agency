import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <div className="row mt-5">
      <div className="col-12 p-2">
        <div className="form_header">
          <h3>{t("contact.formTitle")}</h3>
          <p>{t("contact.formDescription")}</p>
        </div>
      </div>

      <div className="col-lg-7 col-12 p-2">
        <form className="form_ui">
          <div className="form_group">
            <InputField
              label={t("contact.fields.fullName.label")}
              placeholder={t("contact.fields.fullName.placeholder")}
            />
            <InputField
              label={t("contact.fields.email.label")}
              placeholder={t("contact.fields.email.placeholder")}
            />
          </div>

          <div className="form_group">
            <SelectField
              label={t("contact.fields.problemType.label")}
              defaultSelect={t("contact.fields.problemType.placeholder")}
              value=""
              options={[
                {
                  value: "booking",
                  name: t("contact.fields.problemType.booking"),
                },
                {
                  value: "payment",
                  name: t("contact.fields.problemType.payment"),
                },
                {
                  value: "other",
                  name: t("contact.fields.problemType.other"),
                },
              ]}
            />
            <SelectField
              label={t("contact.fields.problemCategory.label")}
              defaultSelect={t("contact.fields.problemCategory.placeholder")}
              value=""
              options={[
                {
                  value: "technical",
                  name: t("contact.fields.problemCategory.technical"),
                },
                {
                  value: "service",
                  name: t("contact.fields.problemCategory.service"),
                },
                {
                  value: "billing",
                  name: t("contact.fields.problemCategory.billing"),
                },
              ]}
            />
          </div>

          <div className="form_group">
            <InputField
              label={t("contact.fields.referenceNumber.label")}
              placeholder={t("contact.fields.referenceNumber.placeholder")}
            />
            <InputField type="date" label={t("contact.fields.flightDate")} />
          </div>

          <div className="form_group">
            <InputField
              as="textarea"
              label={t("contact.fields.message.label")}
              placeholder={t("contact.fields.message.placeholder")}
            />
          </div>

          <button className="submit_btn mt-2">
            {t("contact.fields.submit")}
          </button>
        </form>
      </div>

      <div className="col-lg-5 col-12 p-2">
        <div className="img">
          <img src="/images/contact.jpg" alt="contact" />
        </div>
      </div>
    </div>
  );
}

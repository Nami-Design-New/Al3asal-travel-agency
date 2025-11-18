import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEffect } from "react";
import { useAuthedUserStore } from "../../../stores/authedUser";
import InputField from "../../../ui/forms/InputField";
import ReactFlagsSelect from "react-flags-select";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useUpdateProfile from "../../../hooks/useUpdateProfile";

const schema = yup.object().shape({
  passport_holder_name: yup
    .string()
    .required("validation.passportHolderRequired"),
  passport_nationality: yup
    .string()
    .required("validation.passportNationalityRequired"),
  passport_number: yup.string().required("validation.passportNumberRequired"),
  passport_end_date: yup.date().required("validation.passportEndDateRequired"),
  passport_issuance_date: yup
    .date()
    .required("validation.passportIssueDateRequired"),
  passport_issuance_country: yup
    .string()
    .required("validation.passportIssueCountryRequired"),
});

const formatDate = (value) => {
  if (!value) return "";

  if (value instanceof Date) {
    return value.toISOString().split("T")[0];
  }

  if (typeof value === "number") {
    return new Date(value).toISOString().split("T")[0];
  }

  if (typeof value === "string") {
    return value.split("T")[0];
  }

  return "";
};

export default function PassportInfoForm() {
  const { t } = useTranslation();
  const { authedUser } = useAuthedUserStore();
  const updateProfile = useUpdateProfile();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      passport_holder_name: "",
      passport_nationality: "",
      passport_number: "",
      passport_end_date: "",
      passport_issuance_date: "",
      passport_issuance_country: "",
    },
  });

  useEffect(() => {
    const cleanDate = (d) => (d ? d.split("T")[0] : "");

    reset({
      passport_holder_name: authedUser.passport_holder_name || "",
      passport_nationality: authedUser.passport_nationality || "",
      passport_number: authedUser.passport_number || "",
      passport_end_date: cleanDate(authedUser.passport_end_date),
      passport_issuance_date: cleanDate(authedUser.passport_issuance_date),
      passport_issuance_country: authedUser.passport_issuance_country || "",
    });
  }, [authedUser, reset]);

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      passport_end_date: formatDate(data.passport_end_date),
      passport_issuance_date: formatDate(data.passport_issuance_date),
    };

    updateProfile.mutate(finalData);
  };

  return (
    <div className="personal_info">
      <h6>{t("profile.passport")}</h6>

      <form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <InputField
            label={t("profile.passportHolder")}
            placeholder={t("profile.enterName")}
            error={t(errors.passport_holder_name?.message)}
            {...register("passport_holder_name")}
          />

          <div className="input-field">
            <label>{t("checkoutForm.nationality")}</label>
            <ReactFlagsSelect
              selected={watch("passport_nationality")}
              onSelect={(code) => setValue("passport_nationality", code)}
            />
            {errors.passport_nationality && (
              <p className="error_text">
                {t(errors.passport_nationality.message)}
              </p>
            )}
          </div>
        </div>

        <div className="form_group">
          <InputField
            label={t("profile.passportNumber")}
            placeholder={t("profile.enterYourPassportNumber")}
            error={t(errors.passport_number?.message)}
            {...register("passport_number")}
          />

          <InputField
            type="date"
            label={t("profile.passportExpiryDate")}
            error={t(errors.passport_end_date?.message)}
            {...register("passport_end_date")}
          />
        </div>

        <div className="form_group">
          <InputField
            type="date"
            label={t("profile.passportIssueDate")}
            error={t(errors.passport_issuance_date?.message)}
            {...register("passport_issuance_date")}
          />

          <div className="input-field">
            <label>{t("profile.passportIssueCountry")}</label>
            <ReactFlagsSelect
              selected={watch("passport_issuance_country")}
              onSelect={(code) => setValue("passport_issuance_country", code)}
            />
            {errors.passport_issuance_country && (
              <p className="error_text">
                {t(errors.passport_issuance_country.message)}
              </p>
            )}
          </div>
        </div>

        <SubmitButton
          text={t("profile.save")}
          loading={updateProfile.isPending}
        />
      </form>
    </div>
  );
}

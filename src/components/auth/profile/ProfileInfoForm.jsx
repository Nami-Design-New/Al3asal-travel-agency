import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

import { useAuthedUserStore } from "../../../stores/authedUser";
import useUpdateProfile from "../../../hooks/useUpdateProfile";

import InputField from "../../../ui/forms/InputField";
import GenderSelect from "../../../ui/forms/GenderSelect";
import ReactFlagsSelect from "react-flags-select";
import SubmitButton from "../../../ui/forms/SubmitButton";
import PasswordField from "../../../ui/forms/PasswordField";

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  nationality: yup.string().required("Nationality is required"),
  address: yup.string().required("Address is required"),
  birth_date: yup.date().required("Birth date is required"),
  gender: yup.string().oneOf(["male", "female"]).required("Gender is required"),
});

export default function ProfileInfoForm() {
  const { t } = useTranslation();
  const { authedUser } = useAuthedUserStore();
  const updateProfile = useUpdateProfile();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      nationality: "",
      address: "",
      birth_date: "",
      gender: "",
    },
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

  useEffect(() => {
    reset({
      name: authedUser?.name || "",
      email: authedUser?.email || "",
      nationality: authedUser?.nationality || "",
      address: authedUser?.address || "",
      birth_date: formatDate(authedUser?.birth_date),
      gender: authedUser?.gender || "",
    });
  }, [authedUser, reset]);

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      birth_date: formatDate(data.birth_date),
    };

    updateProfile.mutate(finalData);
  };

  return (
    <div className="personal_info mb-3">
      <h6>{t("profile.PersonalInformation")}</h6>

      <form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <InputField
            label={t("profile.fullName")}
            placeholder={t("profile.enterYourName")}
            error={errors.name?.message}
            {...register("name")}
          />

          <InputField
            type="email"
            label={t("profile.email")}
            placeholder={t("profile.enterYourEmail")}
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="form_group">
          {/* Nationality */}
          <div className="input-field">
            <label>{t("checkoutForm.nationality")}</label>
            <ReactFlagsSelect
              selected={watch("nationality")}
              onSelect={(code) => setValue("nationality", code)}
            />
            {errors.nationality && (
              <p className="error_text">{errors.nationality.message}</p>
            )}
          </div>

          <InputField
            label={t("profile.adress")}
            placeholder={t("profile.enterYourAdress")}
            error={errors.address?.message}
            {...register("address")}
          />
        </div>

        <div className="form_group">
          <InputField
            type="date"
            label={t("profile.dateOfBirth")}
            error={errors.birth_date?.message}
            {...register("birth_date")}
          />

          <GenderSelect
            name="gender"
            label={t("profile.gender")}
            value={watch("gender")}
            onChange={(e) => setValue("gender", e.target.value)}
            error={errors.gender?.message}
          />
        </div>

        <div className="form_group gap-0">
          <input
            type="checkbox"
            onChange={() => setShow(!show)}
            style={{ marginRight: "8px" }}
          />
          <label>{t("profile.wantChangePassword")}</label>
        </div>

        {show && (
          <div className="form_group">
            <PasswordField
              label={t("profile.password")}
              placeholder={t("profile.enterYourPassword")}
            />

            <PasswordField
              label={t("profile.confirmPassword")}
              placeholder={t("profile.enterYourPassword")}
            />
          </div>
        )}

        <SubmitButton
          text={t("profile.save")}
          loading={updateProfile.isPending}
        />
      </form>
    </div>
  );
}

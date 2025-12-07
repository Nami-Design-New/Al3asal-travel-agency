import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";
import ReactFlagsSelect from "react-flags-select";
import SubmitButton from "../../ui/forms/SubmitButton";


export default function TravelerForm({
  index,
  active,
  setActive,
  isLast,
  onNext,
  type,
}) {
  const { t } = useTranslation();
  const {
    watch,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const travelerErrors = errors?.pax_list?.[index] || {};
  const identityType =
    watch(`pax_list.${index}.identity_info.type`) || "PASSPORT";

  const GENDER_OPTIONS = [
    { value: "MALE", name: t("profile.genderMale", { defaultValue: "Male" }) },
    { value: "FEMALE", name: t("profile.genderFemale", { defaultValue: "Female" }) },
  ];

  const IDENTITY_TYPE_OPTIONS = [
    { value: "PASSPORT", name: t("checkoutForm.identityTypes.passport") },
    { value: "CNIC", name: t("checkoutForm.identityTypes.cnic") },
    { value: "FOID", name: t("checkoutForm.identityTypes.foid") },
    { value: "TC", name: t("checkoutForm.identityTypes.tc") },
  ];

  const typeLabelMap = {
    ADULT: t("flights.adult"),
    CHILD: t("flights.child"),
    INFANT: t("flights.infant"),
  };

  if (active !== index) {
    return (
      <>
        <div className="line"></div>
        <div className="col-12 p-2">
          <div className="title">
            <h6 className="mb-0">
              {t("flights.traveler")} {index + 1} ({typeLabelMap[type] || type.toLowerCase()})
            </h6>

            {index < active && (
              <span onClick={() => setActive(index)}>{t("checkoutForm.edit")}</span>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="line"></div>

      <div className="col-12 p-2">
        <div className="title ">
          <h6 className="mb-0">
            {t("flights.traveler")} {index + 1} ({typeLabelMap[type] || type.toLowerCase()})
          </h6>
        </div>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          name={`pax_list.${index}.name`}
          label={t("checkoutForm.firstName")}
          placeholder={t("checkoutForm.firstName")}
          {...register(`pax_list.${index}.name`)}
          error={travelerErrors?.name?.message && t(travelerErrors?.name?.message)}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          name={`pax_list.${index}.lastname`}
          label={t("checkoutForm.lastName")}
          placeholder={t("checkoutForm.lastName")}
          {...register(`pax_list.${index}.lastname`)}
          error={travelerErrors?.lastname?.message && t(travelerErrors?.lastname?.message)}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          type="date"
          name={`pax_list.${index}.birthdate`}
          label={t("checkoutForm.dateOfBirth")}
          {...register(`pax_list.${index}.birthdate`)}
          error={travelerErrors?.birthdate?.message && t(travelerErrors?.birthdate?.message)}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <SelectField
          name={`pax_list.${index}.gender`}
          label={t("profile.gender")}
          options={GENDER_OPTIONS}
          defaultSelect={t("checkoutForm.selectGender")}
          value={watch(`pax_list.${index}.gender`)}
          onChange={(e) => setValue(`pax_list.${index}.gender`, e.target.value)}
          error={travelerErrors?.gender?.message && t(travelerErrors?.gender?.message)}
        />
      </div>

      <div className="col-12 p-2">
        <label>{t("checkoutForm.identityDocumentType")}</label>
        <SelectField
          name={`pax_list.${index}.identity_info.type`}
          options={IDENTITY_TYPE_OPTIONS}
          defaultSelect={t("checkoutForm.selectIdentityType")}
          value={identityType}
          onChange={(e) => {
            setValue(`pax_list.${index}.identity_info.type`, e.target.value);
          }}
          error={travelerErrors?.identity_info?.type?.message && t(travelerErrors?.identity_info?.type?.message)}
        />
      </div>

      {/* Identity Document Fields */}
      {identityType === "PASSPORT" && (
        <>
          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.passport.no`}
              label={t("checkoutForm.passportNumber")}
              placeholder={t("checkoutForm.enterPassportNumber")}
              {...register(`pax_list.${index}.identity_info.passport.no`)}
              error={travelerErrors?.identity_info?.passport?.no?.message && t(travelerErrors?.identity_info?.passport?.no?.message)}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              type="date"
              name={`pax_list.${index}.identity_info.passport.end_date`}
              label={t("checkoutForm.passportExpiryDate")}
              {...register(`pax_list.${index}.identity_info.passport.end_date`)}
              error={travelerErrors?.identity_info?.passport?.end_date?.message && t(travelerErrors?.identity_info?.passport?.end_date?.message)}
            />
          </div>

          <div className="col-12 p-2">
            <label>{t("checkoutForm.citizenshipCountry")}</label>
            <ReactFlagsSelect
              selected={watch(
                `pax_list.${index}.identity_info.passport.citizenship_country`
              )}
              onSelect={(code) =>
                setValue(
                  `pax_list.${index}.identity_info.passport.citizenship_country`,
                  code
                )
              }
            />
            {travelerErrors?.identity_info?.passport?.citizenship_country
              ?.message && (
              <span className="error">
                {t(travelerErrors.identity_info.passport.citizenship_country.message)}
              </span>
            )}
          </div>
        </>
      )}

      {identityType === "CNIC" && (
        <div className="col-12 p-2">
          <InputField
            name={`pax_list.${index}.identity_info.cnic.no`}
            label={t("checkoutForm.cnicNumber")}
            placeholder={t("checkoutForm.cnicNumber")}
            {...register(`pax_list.${index}.identity_info.cnic.no`)}
            error={travelerErrors?.identity_info?.cnic?.no?.message && t(travelerErrors?.identity_info?.cnic?.no?.message)}
          />
        </div>
      )}

      {identityType === "FOID" && (
        <>
          <div className="col-lg-6 col-12 p-2">
            <label>{t("checkoutForm.citizenshipCountry")}</label>
            <ReactFlagsSelect
              selected={watch(
                `pax_list.${index}.identity_info.foid.citizenship_country`
              )}
              onSelect={(code) =>
                setValue(
                  `pax_list.${index}.identity_info.foid.citizenship_country`,
                  code
                )
              }
            />
            {travelerErrors?.identity_info?.foid?.citizenship_country
              ?.message && (
              <span className="error">
                {t(travelerErrors.identity_info.foid.citizenship_country.message)}
              </span>
            )}
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.foid.no`}
              label={t("checkoutForm.foidNumber")}
              placeholder={t("checkoutForm.foidNumber")}
              {...register(`pax_list.${index}.identity_info.foid.no`)}
              error={travelerErrors?.identity_info?.foid?.no?.message && t(travelerErrors?.identity_info?.foid?.no?.message)}
            />
          </div>
        </>
      )}

      {identityType === "TC" && (
        <>
          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.tc.no`}
              label={t("checkoutForm.tcNumber")}
              placeholder={t("checkoutForm.tcNumber")}
              type="number"
              {...register(`pax_list.${index}.identity_info.tc.no`)}
              error={travelerErrors?.identity_info?.tc?.no?.message && t(travelerErrors?.identity_info?.tc?.no?.message)}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.tc.hes_code`}
              label={t("checkoutForm.hesCodeOptional")}
              placeholder={t("checkoutForm.hesCode")}
              {...register(`pax_list.${index}.identity_info.tc.hes_code`)}
              error={travelerErrors?.identity_info?.tc?.hes_code?.message && t(travelerErrors?.identity_info?.tc?.hes_code?.message)}
            />
          </div>
        </>
      )}

      {/* Additional checks for identity type */}
      <div className="col-12 p-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={watch(
              `pax_list.${index}.identity_info.not_turkish_citizen`
            )}
            onChange={(e) =>
              setValue(
                `pax_list.${index}.identity_info.not_turkish_citizen`,
                e.target.checked
              )
            }
          />
          <label className="form-check-label">{t("checkoutForm.notTurkishCitizen")}</label>
        </div>
      </div>

      <div className="col-12 p-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={watch(
              `pax_list.${index}.identity_info.not_pakistan_citizen`
            )}
            onChange={(e) =>
              setValue(
                `pax_list.${index}.identity_info.not_pakistan_citizen`,
                e.target.checked
              )
            }
          />
          <label className="form-check-label">{t("checkoutForm.notPakistanCitizen")}</label>
        </div>
      </div>

      {!isLast && (
        <div className="col-12 p-2 mt-2" onClick={onNext}>
          <SubmitButton text={t("checkoutForm.nextTraveler")} />
        </div>
      )}
    </>
  );
}

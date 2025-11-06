import { useFormContext } from "react-hook-form";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";
import ReactFlagsSelect from "react-flags-select";
import SubmitButton from "../../ui/forms/SubmitButton";

const GENDER_OPTIONS = [
  { value: "MALE", name: "Male" },
  { value: "FEMALE", name: "Female" },
];

const IDENTITY_TYPE_OPTIONS = [
  { value: "PASSPORT", name: "Passport" },
  { value: "CNIC", name: "CNIC (Pakistan)" },
  { value: "FOID", name: "Foreign ID" },
  { value: "TC", name: "TC (Turkey)" },
];

export default function TravelerForm({
  index,
  active,
  setActive,
  isLast,
  onNext,
  type,
}) {
  const {
    watch,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const travelerErrors = errors?.pax_list?.[index] || {};
  const identityType =
    watch(`pax_list.${index}.identity_info.type`) || "PASSPORT";

  if (active !== index) {
    return (
      <>
        <div className="line"></div>
        <div className="col-12 p-2">
          <div className="title">
            <h6 className="mb-0">
              Traveler {index + 1} ({type.toLowerCase()})
            </h6>

            {index < active && (
              <span onClick={() => setActive(index)}>Edit</span>
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
            Traveler {index + 1} ({type.toLowerCase()})
          </h6>
        </div>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          name={`pax_list.${index}.name`}
          label="First Name"
          placeholder="First Name"
          {...register(`pax_list.${index}.name`)}
          error={travelerErrors?.name?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          name={`pax_list.${index}.lastname`}
          label="Last Name"
          placeholder="Last Name"
          {...register(`pax_list.${index}.lastname`)}
          error={travelerErrors?.lastname?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          type="date"
          name={`pax_list.${index}.birthdate`}
          label="Birthdate"
          {...register(`pax_list.${index}.birthdate`)}
          error={travelerErrors?.birthdate?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <SelectField
          name={`pax_list.${index}.gender`}
          label="Gender"
          options={GENDER_OPTIONS}
          defaultSelect="Select Gender"
          value={watch(`pax_list.${index}.gender`)}
          onChange={(e) => setValue(`pax_list.${index}.gender`, e.target.value)}
          error={travelerErrors?.gender?.message}
        />
      </div>

      <div className="col-12 p-2">
        <label>Identity Document Type</label>
        <SelectField
          name={`pax_list.${index}.identity_info.type`}
          options={IDENTITY_TYPE_OPTIONS}
          defaultSelect="Select Identity Type"
          value={identityType}
          onChange={(e) => {
            setValue(`pax_list.${index}.identity_info.type`, e.target.value);
          }}
          error={travelerErrors?.identity_info?.type?.message}
        />
      </div>

      {/* Identity Document Fields */}
      {identityType === "PASSPORT" && (
        <>
          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.passport.no`}
              label="Passport Number"
              placeholder="Passport Number"
              {...register(`pax_list.${index}.identity_info.passport.no`)}
              error={travelerErrors?.identity_info?.passport?.no?.message}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              type="date"
              name={`pax_list.${index}.identity_info.passport.end_date`}
              label="Passport Expiry Date"
              {...register(`pax_list.${index}.identity_info.passport.end_date`)}
              error={travelerErrors?.identity_info?.passport?.end_date?.message}
            />
          </div>

          <div className="col-12 p-2">
            <label>Citizenship Country</label>
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
                {
                  travelerErrors.identity_info.passport.citizenship_country
                    .message
                }
              </span>
            )}
          </div>
        </>
      )}

      {identityType === "CNIC" && (
        <div className="col-12 p-2">
          <InputField
            name={`pax_list.${index}.identity_info.cnic.no`}
            label="CNIC Number"
            placeholder="12345-1234567-1"
            {...register(`pax_list.${index}.identity_info.cnic.no`)}
            error={travelerErrors?.identity_info?.cnic?.no?.message}
          />
        </div>
      )}

      {identityType === "FOID" && (
        <>
          <div className="col-lg-6 col-12 p-2">
            <label>Citizenship Country</label>
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
                {travelerErrors.identity_info.foid.citizenship_country.message}
              </span>
            )}
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.foid.no`}
              label="Foreign ID Number"
              placeholder="Foreign ID Number"
              {...register(`pax_list.${index}.identity_info.foid.no`)}
              error={travelerErrors?.identity_info?.foid?.no?.message}
            />
          </div>
        </>
      )}

      {identityType === "TC" && (
        <>
          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.tc.no`}
              label="TC Number"
              placeholder="TC Number"
              type="number"
              {...register(`pax_list.${index}.identity_info.tc.no`)}
              error={travelerErrors?.identity_info?.tc?.no?.message}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              name={`pax_list.${index}.identity_info.tc.hes_code`}
              label="HES Code (Optional)"
              placeholder="HES Code"
              {...register(`pax_list.${index}.identity_info.tc.hes_code`)}
              error={travelerErrors?.identity_info?.tc?.hes_code?.message}
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
          <label className="form-check-label">Not a Turkish citizen</label>
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
          <label className="form-check-label">Not a Pakistan citizen</label>
        </div>
      </div>

      {!isLast && (
        <div className="col-12 p-2 mt-2" onClick={onNext}>
          <SubmitButton text="Next Traveler" />
        </div>
      )}
    </>
  );
}

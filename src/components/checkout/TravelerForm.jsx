import { useFormContext } from "react-hook-form";
import InputField from "../../ui/forms/InputField";
import GenderSelect from "../../ui/forms/GenderSelect";
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
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const travelerErrors = errors?.pax_list?.[index] || {};

  if (active !== index) {
    return (
      <>
        <div className="line"></div>
        <div className="col-12 p-2">
          <div className="title">
            <h6 className="mb-0">
              Traveler {index + 1} ( {type} )
            </h6>
            <span onClick={() => setActive(index)}>Edit</span>
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
            Traveler {index + 1} ( {type} )
          </h6>
        </div>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          name={`pax_list.${index}.name`}
          label="First Name"
          error={travelerErrors?.name?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          name={`pax_list.${index}.lastname`}
          label="Last Name"
          error={travelerErrors?.lastname?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          type="date"
          name={`pax_list.${index}.birthdate`}
          label="Birthdate"
          error={travelerErrors?.birthdate?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          name={`pax_list.${index}.passportNumber`}
          label="Passport Number"
          error={travelerErrors?.passportNumber?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <InputField
          type="date"
          name={`pax_list.${index}.passportExpiry`}
          label="Passport Expiry"
          error={travelerErrors?.passportExpiry?.message}
        />
      </div>

      <div className="col-lg-6 col-12 p-2">
        <label>Nationality</label>
        <ReactFlagsSelect
          selected={watch(`pax_list.${index}.nationality`)}
          onSelect={(code) => setValue(`pax_list.${index}.nationality`, code)}
        />
        {travelerErrors?.nationality?.message && (
          <span className="error">{travelerErrors.nationality.message}</span>
        )}
      </div>

      <div className="col-lg-6 col-12 p-2">
        <GenderSelect
          name={`pax_list.${index}.gender`}
          error={travelerErrors?.gender?.message}
        />
      </div>

      {!isLast && (
        <div className="col-12 p-2 mt-2" onClick={onNext}>
          <SubmitButton text="Next Traveler" />
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passengerSchema } from "../../validations/passengerSchema";
import TravelerForm from "./TravelerForm";
import InputField from "../../ui/forms/InputField";
import PhoneField from "../../ui/forms/PhoneField";
import SubmitButton from "../../ui/forms/SubmitButton";
import useSearchStore from "../../stores/searchStore";

export default function PassengerDetails() {
  const { flightsFilter } = useSearchStore();
  const [active, setActive] = useState(0);

  const paxDefaults = flightsFilter.pax_list.flatMap((pax) =>
    Array.from({ length: pax.count }, () => ({
      type: pax.type,
      name: "",
      lastname: "",
      birthdate: "",
      passportNumber: "",
      passportExpiry: "",
      nationality: "",
      gender: "",
    }))
  );

  const methods = useForm({
    defaultValues: {
      contact: {
        email: "",
        phone: {
          area_code: "",
          country_code: "",
          phone_number: "",
        },
      },
      pax_list: paxDefaults,
    },
    resolver: yupResolver(passengerSchema),
    mode: "onChange",
  });

  const { handleSubmit, trigger, control } = methods;

  const { fields } = useFieldArray({
    control,
    name: "pax_list",
  });

  const handleNextTraveler = async (index) => {
    const valid = await trigger(`pax_list.${index}`);
    if (valid) {
      setActive(index + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="form_ui"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="row">
          <div className="col-12 p-2">
            <h6>Contact Info</h6>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <InputField name="contact.email" label="Email" />
          </div>
          <div className="col-lg-6 col-12 p-2">
            <PhoneField name="contact.phone" label="Phone" />
          </div>

          {fields.map((field, index) => (
            <TravelerForm
              key={field.id}
              index={index}
              active={active}
              setActive={setActive}
              isLast={index === fields.length - 1}
              onNext={() => handleNextTraveler(index)}
              type={field.type}
            />
          ))}

          {active === fields.length - 1 && (
            <div className="col-12 p-2 mt-2">
              <SubmitButton text="Continue" />
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passengerSchema } from "../../validations/passengerSchema";
import { getTotalPrice } from "./priceDetails/utils";
import TravelerForm from "./TravelerForm";
import InputField from "../../ui/forms/InputField";
import PhoneField from "../../ui/forms/PhoneField";
import SubmitButton from "../../ui/forms/SubmitButton";
import useSearchStore from "../../stores/searchStore";
import useBookFlight from "../../hooks/useBookFlight";
import useFlightsStore from "../../stores/flightsStore";
import useGetSettings from "../../hooks/useGetSettings";

export default function PassengerDetails() {
  const { t } = useTranslation();
  const { flightsFilter } = useSearchStore();
  const { fare_details, dapart_flight, return_flight } = useFlightsStore();
  const { bookFlight, isPending } = useBookFlight();
  const [active, setActive] = useState(0);
  const { data: settings } = useGetSettings();
  const profitPercentage = settings?.profit_percentage;

  const paxDefaults = flightsFilter.pax_list.flatMap((pax) =>
    Array.from({ length: pax.count }, () => ({
      type: pax.type,
      name: "",
      lastname: "",
      birthdate: "",
      gender: "MALE",
      identity_info: {
        type: "PASSPORT",
        passport: {
          no: "",
          end_date: "",
          citizenship_country: "SY",
        },
        cnic: {
          no: "",
        },
        foid: {
          no: "",
          citizenship_country: "SY",
        },
        tc: {
          no: "",
          hes_code: "",
        },
        not_turkish_citizen: false,
        not_pakistan_citizen: false,
      },
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

  const {
    handleSubmit,
    trigger,
    setValue,
    register,
    control,
    formState: { errors },
  } = methods;

  const { fields } = useFieldArray({
    control,
    name: "pax_list",
  });

  const handleNextTraveler = async (index) => {
    let valid;

    if (index === 0) {
      valid = await trigger([
        "contact.email",
        "contact.phone",
        `pax_list.${index}`,
      ]);
    } else {
      valid = await trigger(`pax_list.${index}`);
    }

    if (valid) {
      setActive(index + 1);
    }
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  const onSubmit = (data) => {
    const departFares = dapart_flight?.fares?.[0]?.fare_info;
    const returnFares = return_flight?.fares?.[0]?.fare_info;

    const priceBeforeProfit = getTotalPrice(departFares, returnFares);

    const totalProfit =
      (getTotalPrice(departFares, returnFares) * profitPercentage) / 100;

    const payload = {
      book_details: {
        fare_detail_key: fare_details.fare_detail_key,

        contact: {
          email: data.contact.email,

          phone: {
            country_code: data.contact.phone.country_code,
            area_code: data.contact.phone.area_code,
            phone_number: data.contact.phone.phone_number,
          },
        },

        pax_list: data.pax_list.map((pax) => ({
          name: pax.name,
          lastname: pax.lastname,
          birthdate: pax.birthdate,
          type: pax.type,
          gender: pax.gender,

          identity_info: (() => {
            const identityType = pax.identity_info.type;
            const base = {
              type: identityType,
              not_turkish_citizen:
                pax.identity_info.not_turkish_citizen || false,
              not_pakistan_citizen:
                pax.identity_info.not_pakistan_citizen || false,
            };

            if (identityType === "PASSPORT") {
              return {
                ...base,
                passport: {
                  no: pax.identity_info.passport.no,
                  end_date: new Date(
                    pax.identity_info.passport.end_date
                  ).toISOString(),
                  citizenship_country:
                    pax.identity_info.passport.citizenship_country,
                },
              };
            }

            if (identityType === "CNIC") {
              return {
                ...base,
                cnic: {
                  no: pax.identity_info.cnic.no,
                },
              };
            }

            if (identityType === "FOID") {
              return {
                ...base,
                foid: {
                  no: pax.identity_info.foid.no,
                  citizenship_country:
                    pax.identity_info.foid.citizenship_country,
                },
              };
            }

            if (identityType === "TC") {
              return {
                ...base,
                tc: {
                  no: pax.identity_info.tc.no,
                  hes_code: pax.identity_info.tc.hes_code || "",
                },
              };
            }

            return base;
          })(),
        })),

        notes: t("booking_note"),
        accept_pending: true,
      },

      flight_details: {
        depart_flight: dapart_flight,
        return_flight: return_flight,
      },

      grand_total: (totalProfit + priceBeforeProfit).toFixed(2),
      total_profit: (totalProfit).toFixed(2),
      price_before_profit: (priceBeforeProfit).toFixed(2),
      type: flightsFilter.trip_type === "ROUND_TRIP" ? "return" : "one_way",
      departure_date: flightsFilter.departure_date,
      return_date: flightsFilter.return_date,
    };

    bookFlight(payload);
  };

  const handlePhoneChange = (value, country) => {
    const dialCode = country.dialCode;
    const phoneNumber = value.replace(dialCode, "").replace("+", "");

    setValue("contact.phone", {
      raw: value,
      country_code: Number(dialCode),
      area_code: Number(dialCode.slice(-3)) || Number(dialCode),
      phone_number: Number(phoneNumber) || 0,
    });
  };

  return (
    <FormProvider {...methods}>
      <form className="form_ui" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="row">
          <div className="col-12 p-2">
            <h6>{t("checkoutForm.contactInfo")}</h6>
          </div>

          <div className="col-lg-6 col-12 p-2">
            <InputField
              name="email"
              label={`${t("checkoutForm.email")} *`}
              type="email"
              id="email"
              placeholder={t("checkoutForm.enterEmail")}
              {...register("contact.email")}
              error={errors.contact?.email?.message && t(errors.contact?.email?.message)}
            />
          </div>

          <div className="col-lg-6 col-12 p-2">
            <PhoneField
              name="contact.phone"
              label={`${t("checkoutForm.phone")} *`}
              handleChange={handlePhoneChange}
              error={
                t(
                  errors.contact?.phone?.phone_number?.message ||
                    errors.contact?.phone?.area_code?.message ||
                    errors.contact?.phone?.country_code?.message ||
                    "",
                  { min: 7 }
                )
              }
            />
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
              <SubmitButton text={t("checkoutForm.continue")} loading={isPending} />
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

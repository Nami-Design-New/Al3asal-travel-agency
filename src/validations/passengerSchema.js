import * as yup from "yup";

export const travelerSchema = yup.object().shape({
  name: yup.string().required("validation.firstNameRequired"),
  lastname: yup.string().required("validation.lastNameRequired"),
  birthdate: yup
    .date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .typeError("validation.birthdateInvalid")
    .required("validation.birthdateRequired")
    .max(new Date(), "validation.birthdateFutureInvalid"),
  type: yup
    .string()
    .oneOf(["ADULT", "CHILD", "INFANT"])
    .required("validation.passengerTypeRequired"),
  gender: yup.string().oneOf(["MALE", "FEMALE"]).required("validation.genderRequired"),

  identity_info: yup.object().shape({
    type: yup
      .string()
      .oneOf(["PASSPORT", "CNIC", "FOID", "TC"])
      .required("validation.identityTypeRequired"),

    passport: yup.object().shape({
      no: yup
        .string()
        .transform((value) => (typeof value === "string" ? value.toUpperCase().replace(/\s/g, "") : value))
        .required("validation.passportNumberRequired")
        .matches(/^[A-Z0-9]{6,14}$/, "validation.passportNumberInvalid"),
      end_date: yup
        .date()
        .nullable()
        .transform((value, originalValue) => (originalValue === "" ? null : value))
        .required("validation.passportEndDateRequired")
        .min(new Date(), "validation.passportEndDateFuture"),
      citizenship_country: yup.string(),
    }),

    cnic: yup.object().shape({
      no: yup.string(),
    }),

    foid: yup.object().shape({
      no: yup.string(),
      citizenship_country: yup.string(),
    }),

    tc: yup.object().shape({
      no: yup
        .number()
        .nullable()
        .transform((value, originalValue) => (originalValue === "" ? null : value)),
      hes_code: yup.string(),
    }),

    not_turkish_citizen: yup.boolean(),
    not_pakistan_citizen: yup.boolean(),
  }),
});

export const passengerSchema = yup.object().shape({
  contact: yup.object().shape({
    email: yup
      .string()
      .label("checkoutForm.email")
      .matches(/^[^@\s]{1,}@[A-Za-z0-9.-]{3,}\.[A-Za-z]{2,6}$/i, "validation.email")
      .required("emailRequired"),
    phone: yup.object().shape({
      area_code: yup
        .string()
        .transform((v) => (typeof v === "number" ? String(v) : v))
        .required("validation.areaCodeRequired"),
      country_code: yup
        .string()
        .transform((v) => (typeof v === "number" ? String(v) : v))
        .required("validation.countryCodeRequired"),
      phone_number: yup
        .string()
        .transform((v) => (typeof v === "number" ? String(v) : v))
        .required("validation.phoneNumberRequired")
        .matches(/^\d{7,}$/, "validation.phoneMinDigits"),
    }),
  }),
  pax_list: yup.array().of(travelerSchema),
});

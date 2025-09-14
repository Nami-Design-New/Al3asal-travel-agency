import * as yup from "yup";

export const travelerSchema = yup.object().shape({
  name: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  birthdate: yup
    .date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Date of birth is required")
    .max(new Date(), "Birthdate cannot be in the future"),
  passportNumber: yup.string().required("Passport number is required"),
  passportExpiry: yup
    .date()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Passport expiry is required")
    .min(new Date(), "Passport must be valid in the future"),

  nationality: yup.string().required("Nationality is required"),
  gender: yup.string().required("Gender is required"),
});

export const passengerSchema = yup.object().shape({
  contact: yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.object().shape({
      area_code: yup.string().required("Area code required"),
      country_code: yup.string().required("Country code required"),
      phone_number: yup.string().required("Phone number required"),
    }),
  }),
  pax_list: yup.array().of(travelerSchema),
});

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
  type: yup
    .string()
    .oneOf(["ADULT", "CHILD", "INFANT"])
    .required("Passenger type is required"),
  gender: yup.string().oneOf(["MALE", "FEMALE"]).required("Gender is required"),

  identity_info: yup.object().shape({
    type: yup
      .string()
      .oneOf(["PASSPORT", "CNIC", "FOID", "TC"])
      .required("Identity type is required"),

    passport: yup.object().shape({
      no: yup.string(),
      end_date: yup
        .date()
        .nullable()
        .transform((value, originalValue) =>
          originalValue === "" ? null : value
        ),
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
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.object().shape({
      area_code: yup.string().required("Area code required"),
      country_code: yup.string().required("Country code required"),
      phone_number: yup.string().required("Phone number required"),
    }),
  }),
  pax_list: yup.array().of(travelerSchema),
});

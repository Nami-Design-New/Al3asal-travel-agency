import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import InputField from "../../ui/forms/InputField";
import SelectField from "../../ui/forms/SelectField";
import useGetContactContent from "../../hooks/useGetContactContent";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../../utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function ContactForm() {
  const { t } = useTranslation();
  const { data } = useGetContactContent();

  const schema = yup.object().shape({
    name: yup.string().required(t("nameRequired")),
    email: yup.string().email(t("emailInvalid")).required(t("emailRequired")),
    contact_category_id: yup.number().required(t("categoryRequired")),
    contact_type_id: yup.number().required(t("typeRequired")),
    message: yup.string().required(t("messageRequired")),

    date: yup
      .date()
      .nullable()
      .transform((value, originalValue) => {
        return originalValue === "" ? null : value;
      })
      .required(t("dateRequired")),

    booking_number: yup.string().required(t("bookingRequired")),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      contact_category_id: "",
      contact_type_id: "",
      message: "",
      date: "",
      booking_number: "",
    },
  });

  console.log(errors);

  const mutation = useMutation({
    mutationFn: (values) =>
      axiosInstance.post("/contacts", {
        ...values,
        date: values.date.toISOString().split("T")[0],
      }),
    onSuccess: () => {
      toast.success(t("contact.success"));
      reset();
    },
  });

  return (
    <div className="row mt-5">
      <div className="col-12 p-2">
        <div className="form_header">
          <h3>{t("contact.formTitle")}</h3>
          <p>{t("contact.formDescription")}</p>
        </div>
      </div>

      <div className="col-lg-7 col-12 p-2">
        <form className="form_ui" onSubmit={handleSubmit(mutation.mutate)}>
          <div className="form_group">
            <InputField
              label={t("contact.fields.fullName.label")}
              placeholder={t("contact.fields.fullName.placeholder")}
              {...register("name")}
              error={errors?.name?.message}
            />
            <InputField
              label={t("contact.fields.email.label")}
              placeholder={t("contact.fields.email.placeholder")}
              {...register("email")}
              error={errors?.email?.message}
            />
          </div>

          <div className="form_group">
            <SelectField
              label={t("contact.fields.problemType.label")}
              defaultSelect={t("contact.fields.problemType.placeholder")}
              {...register("contact_type_id")}
              error={errors?.contact_type_id?.message}
              options={(data?.types || []).map((item) => ({
                value: item?.id,
                name: item?.title || "",
              }))}
            />

            <SelectField
              label={t("contact.fields.problemCategory.label")}
              defaultSelect={t("contact.fields.problemCategory.placeholder")}
              {...register("contact_category_id")}
              error={errors?.contact_category_id?.message}
              options={(data?.categories || []).map((item) => ({
                value: item?.id,
                name: item?.title || "",
              }))}
            />
          </div>

          <div className="form_group">
            <InputField
              label={t("contact.fields.referenceNumber.label")}
              placeholder={t("contact.fields.referenceNumber.placeholder")}
              {...register("booking_number")}
              error={errors?.booking_number?.message}
            />

            <InputField
              type="date"
              label={t("contact.fields.flightDate")}
              {...register("date")}
              error={errors?.date?.message}
            />
          </div>

          <div className="form_group">
            <InputField
              as="textarea"
              label={t("contact.fields.message.label")}
              placeholder={t("contact.fields.message.placeholder")}
              {...register("message")}
              error={errors?.message?.message}
            />
          </div>

          <SubmitButton
            text={t("contact.fields.submit")}
            loading={mutation.isPending}
          />
        </form>
      </div>

      <div className="col-lg-5 col-12 p-2 d-lg-block d-none">
        <div className="img">
          <img src="/images/contact.jpg" alt="contact" />
        </div>
      </div>
    </div>
  );
}

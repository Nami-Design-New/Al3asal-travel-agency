import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import * as yup from "yup";
import axiosInstance from "../../../utils/axiosInstance";
import useAuthStore from "../../../stores/authStore";

export default function useRegister(t) {
  const { setStep, setPhone } = useAuthStore();

  const schema = yup.object().shape({
    name: yup.string().required(t("validation.required")),
    email: yup
      .string()
      .required(t("validation.required"))
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, t("validation.email")),
    phone: yup
      .string()
      .required(t("validation.required"))
      .matches(/^[0-9]+$/, t("validation.onlyNumbers"))
      .min(7, t("validation.min", { min: 7 })),
    phone_code: yup.string().required(t("validation.required")),
    gender: yup.string().oneOf(["male", "female"]).required(),
    password: yup
      .string()
      .required(t("validation.required"))
      .min(6, t("validation.min", { min: 6 })),
    confirm_password: yup
      .string()
      .required(t("validation.required"))
      .oneOf([yup.ref("password")], t("validation.passwordsNotMatch")),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone_code: "",
      phone: "",
      gender: "male",
      password: "",
      confirm_password: "",
    },
  });

  const { mutate: submitRegister, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/auth/register", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.code === 200) {
        toast.success(t("auth.registerSuccess"));
        setStep("verify_register");
      } else {
        toast.error(t("auth.registerFailed"));
      }
    },
    onError: (error) => {
      toast.error(error.message || t("auth.somethingWentWrong"));
    },
  });

  return {
    isLoading: isPending,
    methods,
    handleSubmit: methods.handleSubmit((data) => {
      submitRegister(data);
      setPhone({
        phone_code: data.phone_code,
        phone: data.phone,
      });
    }),
  };
}

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import * as yup from "yup";
import axiosInstance from "../../../utils/axiosInstance";
import useAuthStore from "../../../stores/authStore";

export default function useRegister(t) {
  const { closeAuthModal } = useAuthStore();
  const [, setCookie] = useCookies(["token"]);

  const schema = yup.object().shape({
    name: yup.string().required(t("validation.required")),
    email: yup
      .string()
      .email(t("validation.email"))
      .required(t("validation.required")),
    phone: yup.string().required(t("validation.required")),
    phone_code: yup.string().required(t("validation.required")),
    password: yup
      .string()
      .required(t("validation.required"))
      .min(6, t("validation.min", { min: 6 })),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone_code: "",
      phone: "",
      password: "",
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
        setCookie("token", data.data?.auth?.token, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
        closeAuthModal();
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
    handleSubmit: methods.handleSubmit(submitRegister),
  };
}

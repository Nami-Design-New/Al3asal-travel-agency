import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { useAuthedUserStore } from "../../../stores/authedUser";
import * as yup from "yup";
import axiosInstance from "../../../utils/axiosInstance";
import useAuthStore from "../../../stores/authStore";

export default function useLogin(t) {
  const { closeAuthModal, setStep, setPhone } = useAuthStore();
  const { setAuthedUser } = useAuthedUserStore();
  const [, setCookie] = useCookies(["token"]);

  const schema = yup.object().shape({
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
      phone_code: "",
      phone: "",
      password: "",
    },
  });

  const { mutate: submitLogin, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/auth/login", {
        password: data.password,
        email_phone: data.phone,
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.code === 200) {
        toast.success(t("auth.loginSuccess"));
        setCookie("token", data.data?.auth?.token, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
        closeAuthModal();
        setAuthedUser(data?.data);
      } else if (data?.code === 403) {
        setStep("verify_register");
      } else {
        toast.error(t("auth.loginFailed"));
      }
    },
    onError: (error) => {
      toast.error(error.message || t("auth.somethingWentWrong"));
    },
  });

  return {
    methods,
    handleSubmit: methods.handleSubmit((data) => {
      submitLogin(data);
      setPhone({
        phone_code: data.phone_code,
        phone: data.phone,
      });
    }),
    isLoading: isPending,
  };
}

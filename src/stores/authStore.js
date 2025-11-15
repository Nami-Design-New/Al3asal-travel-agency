import { create } from "zustand";

const useAuthStore = create((set) => ({
  show: false,
  step: "login",
  phone: {
    code: "",
    number: "",
  },

  openAuthModal: (value) =>
    set(() => ({
      show: value,
    })),

  closeAuthModal: () =>
    set(() => ({
      show: false,
      step: "login",
    })),

  setStep: (step) =>
    set(() => ({
      step,
    })),

  setPhone: (phone) =>
    set(() => ({
      phone,
    })),
}));

export default useAuthStore;

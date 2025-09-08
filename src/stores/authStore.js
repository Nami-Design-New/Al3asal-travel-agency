import { create } from "zustand";

const useAuthStore = create((set) => ({
  show: false,
  step: "login",

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
}));

export default useAuthStore;

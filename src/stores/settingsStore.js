import { create } from "zustand";

const useSettingsStore = create((set) => ({
  lang: localStorage.getItem("i18nextLng") || "en",

  setLanguage: (lang) =>
    set(() => {
      localStorage.setItem("i18nextLng", lang);
      return { lang };
    }),
}));

export default useSettingsStore;

import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem(key) || defaultValue;
  }
  return defaultValue;
};

const settings = createSlice({
  name: "settings",
  initialState: {
    lang: getLocalStorageItem("lang", "en"),
    currency: getLocalStorageItem("currency", "USD"),
  },

  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", action.payload);
      }
    },

    setCurrency: (state, action) => {
      state.currency = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("currency", action.payload);
      }
    },
  },
});

export const { setLanguage, setCurrency } = settings.actions;
export default settings.reducer;

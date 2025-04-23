import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",

  initialState: {
    show: false,
    step: "login",
  },

  reducers: {
    setShowAuthModal: (state, action) => {
      state.show = action.payload;
    },

    setStep: (state, action) => {
      state.step = action.payload;
    },

    closeAuthModal: (state) => {
      state.show = false;
      state.step = "login";
    },
  },
});

export const { setShowAuthModal, closeAuthModal, setStep } = auth.actions;
export default auth.reducer;

import { configureStore } from "@reduxjs/toolkit";
import settings from "./slices/settings";
import auth from "./slices/auth";

export const store = configureStore({
  reducer: {
    settings: settings,
    auth: auth,
  },
});

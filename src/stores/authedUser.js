import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthedUserStore = create(
  persist(
    (set) => ({
      authedUser: null,
      setAuthedUser: (userData) => set({ authedUser: userData }),
      clearAuthedUser: () => set({ authedUser: null }),
    }),
    {
      name: "authedUser",
    }
  )
);

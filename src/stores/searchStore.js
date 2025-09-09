import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSearchStore = create(
  persist(
    (set) => ({
      flightsFilter: {
        from_destination: {
          city: false,
          code: "",
        },

        to_destination: {
          city: false,
          code: "",
        },

        pax_list: [
          {
            type: "ADULT",
            count: 1,
          },
          {
            type: "CHILD",
            count: 0,
          },
          {
            type: "INFANT",
            count: 0,
          },
        ],

        departure_date: "",
        return_date: "",
        accept_pending: true,
        cabin_type: "ECONOMY",

        trip_type: "ONE_WAY",
        from_airport: {},
        to_airport: {},
      },

      updateFilter: (newValues) =>
        set((state) => ({
          flightsFilter: {
            ...state.flightsFilter,
            ...newValues,
          },
        })),
    }),
    {
      name: "search-storage",
    }
  )
);

export default useSearchStore;

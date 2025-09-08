import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSearchStore = create(
  persist(
    (set) => ({
      flights_filter: {
        from_destination: {
          city: false,
          code: "",
        },

        to_destination: {
          city: true,
          code: "",
        },

        pax_list: [
          {
            type: "ADULT",
            count: 1,
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

      setFlightsFilter: (flights_filter) =>
        set(() => ({
          flights_filter,
        })),
    }),
    {
      name: "search-storage",
    }
  )
);

export default useSearchStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFlightsStore = create(
  persist(
    (set) => ({
      dapart_flight: {},
      return_flight: {},

      setDepartFlight: (flight) => set({ dapart_flight: flight }),
      setReturnFlight: (flight) => set({ return_flight: flight }),
    }),
    {
      name: "choosed-flights",
    }
  )
);

export default useFlightsStore;

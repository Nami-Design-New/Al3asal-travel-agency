import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFlightsStore = create(
  persist(
    (set) => ({
      dapart_flight: {},
      return_flight: {},
      fare_details: {},

      setDepartFlight: (flight) => set({ dapart_flight: flight }),
      setReturnFlight: (flight) => set({ return_flight: flight }),
      setFareDetails: (fareDetails) => set({ fare_details: fareDetails }),
    }),
    {
      name: "choosed-flights",
    }
  )
);

export default useFlightsStore;

import { useQuery } from "@tanstack/react-query";
import useSearchStore from "../stores/searchStore";
import axiosInstance from "../utils/axiosInstance";
import useFlightsStore from "../stores/flightsStore";

export default function useGetFares() {
  const { flightsFilter } = useSearchStore();
  const { dapart_flight, return_flight } = useFlightsStore();
  const departFareKey = dapart_flight?.fares?.[0]?.fare_key;
  const returnFareKey = return_flight?.fares?.[0]?.fare_key;

  const payload = {
    pax_list: flightsFilter.pax_list,
    departure_fare_key: departFareKey,
    return_fare_key: returnFareKey,
  };

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["fare", payload],
    queryFn: () => getFares(payload),
    enabled: !!departFareKey,
  });

  return { data, isLoading, refetch, isFetching };
}

async function getFares(payload) {
  const response = await axiosInstance.post("/home/fare", payload);
  if (response.data.code === 200) {
    return response.data.data;
  }
  throw new Error("Failed to fetch fares");
}

import { useQuery } from "@tanstack/react-query";
import useSearchStore from "../stores/searchStore";
import axiosInstance from "../utils/axiosInstance";
import useSettingsStore from "../stores/settingsStore";

export default function useGetTickets(enabled) {
  const { lang } = useSettingsStore();
  const { flightsFilter } = useSearchStore();

  const payload = {
    from_destination: flightsFilter.from_destination,
    to_destination: flightsFilter.to_destination,
    departure_date: flightsFilter.departure_date,
    accept_pending: true,
    cabin_type: flightsFilter.cabin_type,
    sort_price: flightsFilter.sort_price,
  };

  if (flightsFilter.return_date) {
    payload.return_date = flightsFilter.return_date;
  }

  const filteredPaxList = flightsFilter.pax_list.filter((p) => p.count !== 0);
  if (filteredPaxList.length > 0) {
    payload.pax_list = filteredPaxList;
  }

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["tickets", lang],
    queryFn: () => getTickets(payload),
    enabled
  });

  return { data, isLoading, refetch, isFetching };
}

async function getTickets(payload) {
  const response = await axiosInstance.post("/home/search", payload);
  if (response.data.code === 200) {
    return response.data?.data;
  }
  throw new Error("Failed to fetch tickets");
}

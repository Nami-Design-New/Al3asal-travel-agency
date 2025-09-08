import { useInfiniteQuery } from "@tanstack/react-query";
import useSettingsStore from "../../../stores/settingsStore";
import axiosInstance from "../../../utils/axiosInstance";

function useGetAirports(search) {
  const { lang } = useSettingsStore();

  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["airports", lang, search],

      queryFn: async ({ pageParam = 1 }) => {
        const res = await axiosInstance.get("/home/airports", {
          params: {
            page: pageParam,
            per_page: 10,
            search: search,
          },
        });

        if (res.data.code === 200) {
          return {
            data: res.data?.data?.airports,
            next_url: res.data?.data?.next_url,
          };
        } else {
          throw new Error("Failed to fetch chats");
        }
      },

      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next_url ? allPages.length + 1 : undefined;
      },

      enabled: !!search,
    });

  return {
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    data: data?.pages.flatMap((page) => page.data) || [],
    fetchNextPage,
  };
}

export default useGetAirports;

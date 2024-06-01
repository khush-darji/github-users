import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchWrapper } from "./fetchWrapper";
// Types
import { User, UserDetail } from "./types";

const fetchUsers = async ({
  pageParam,
}: {
  pageParam: number | undefined;
}): Promise<User[]> => {
  return await fetchWrapper(`/users?since=${pageParam}&per_page=100`);
};

export const useFetchUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialPageParam: 0,
    getNextPageParam: (lastPage: User[], pages: User[][]) => {
      return lastPage.length ? pages.length * 100 : undefined;
    },
  });
};

const fetchUser = async (username: string): Promise<UserDetail> => {
  return await fetchWrapper(`/users/${username}`);
};

export const useFetchUser = (username: string) => {
  return useQuery({
    queryKey: ["users", username],
    queryFn: async () => {
      return await fetchUser(username);
    },
  });
};

"use client";
import { useFetchUsers } from "@/api/fetchHooks";
import Avatar from "@/components/Avatar";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  avatar_url: string;
  first_name: string;
  last_name: string;
  username: string;
  login: string;
}

const UserListPage = () => {
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchUsers();

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if ((scrollHeight - scrollTop).toFixed(0) === clientHeight.toFixed(0)) {
      fetchNextPage();
    }
  };

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  let users: User[] = [];

  data?.pages?.forEach((page: User[]) => {
    users.push(...page);
  });

  return (
    <main
      className="relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <div className="container mx-auto px-5 py-5">
        <h1 className="text-3xl font-bold mb-4">User List</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users?.map((user: User,index:number) => (
            <Link
              href={`/profile/${user.login}`}
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded shadow"
            >
              <Avatar user={user} />
              <p className="text-lg font-bold text-black uppercase">
                {user.login}
              </p>
            </Link>
          ))}
        </div>
        {isLoading || isFetching ? <Spinner /> : null}
      </div>
    </main>
  );
};

export default UserListPage;

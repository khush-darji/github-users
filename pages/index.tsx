"use client";
import Avatar from "@/components/Avatar";
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

const UserListPage: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <div className="container mx-auto px-5 py-5">
      <h1 className="text-3xl font-bold mb-4">User List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Link
            href={`/profile/${user.login}`}
            key={user.id}
            className="flex flex-col items-center p-4 bg-white rounded shadow"
          >
            <Avatar user={user} />
            <p className="text-lg font-bold text-black uppercase">{user.login}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}

export default UserListPage;

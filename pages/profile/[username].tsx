"use client";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import Label from "@/components/Label";
import Navigate from "@/components/Navigate";
import { useRouter } from "next/router";
import { FaUserFriends } from "react-icons/fa";

interface UserDetail {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  company: string;
  location: string;
  twitter_username: string;
  blog: string;
  repos_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}
const Profile = ({ user }: { user: UserDetail }) => {
  const router = useRouter();

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="object-center p-4">
      <div className="flex items-center">
        <Avatar user={user} />
        <div className="ml-5">
          <p className="text-2xl font-bold mb-2 ">{user?.name}</p>
          <p className="text-gray-600">{user?.bio}</p>
          <p className="text-gray-600">{user?.company}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-600">Location: {user?.location}</p>
        <Navigate
          label="Twitter"
          url={`https://twitter.com/${user?.twitter_username}`}
        />
        <Label label="Blog" value={user?.blog} />
        <Navigate label="Repository Url" url={user?.repos_url} />
        <Label label="Public Repos" value={user?.public_repos} />
        <Label label="Public Gists" value={user?.public_gists} />
        <Badge icon={<FaUserFriends />} value={user?.followers} />
        <Badge icon={<FaUserFriends />} value={user?.following} />
      </div>
    </div>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: { username: string };
}) {
  try {
    const { username } = params;
    const res = await fetch(`http://localhost:3000/api/users/${username}`);
    if (!res.ok) {
      return {
        notFound: true,
      };
    }
    const data: UserDetail = await res.json();
    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      notFound: true,
    };
  }
}

export default Profile;

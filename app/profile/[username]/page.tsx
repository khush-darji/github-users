"use client";
import { useFetchUser } from "@/api/fetchHooks";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import Label from "@/components/Label";
import Navigate from "@/components/Navigate";
import { useRouter } from "next/router";
import { FaUserFriends } from "react-icons/fa";
import { useParams, useSearchParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import { UserDetail } from "@/api/types";

const Profile = () => {
  const params = useParams();
  const { data, isLoading, error } = useFetchUser(params.username as string);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <div>User not found.</div>;
  }

  return (
    <div className="object-center p-4">
      <div className="flex items-center">
        <Avatar user={data} />
        <div className="ml-5">
          <p className="text-2xl font-bold mb-2 ">{data?.name}</p>
          <Label value={data?.bio} />
          <Label value={data?.company} />
        </div>
      </div>
      <div>
        <Label label="Location" value={data?.location} />
        <Navigate
          label="Twitter"
          url={
            data?.twitter_username
              ? `https://twitter.com/${data?.twitter_username}`
              : undefined
          }
        />
        <Navigate label="Blog" url={data?.blog} />
        <Navigate label="Repository Url" url={data?.repos_url} />
        <Label label="Public Repos" value={data?.public_repos} />
        <Label label="Public Gists" value={data?.public_gists} />
        <Badge icon={<FaUserFriends />} value={data?.followers} />
        <Badge icon={<FaUserFriends />} value={data?.following} />
      </div>
    </div>
  );
};
export default Profile;

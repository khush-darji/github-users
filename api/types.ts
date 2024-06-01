export type User = {
  id: number;
  avatar_url: string;
  first_name: string;
  last_name: string;
  username: string;
  login: string;
};

export type UserDetail ={
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
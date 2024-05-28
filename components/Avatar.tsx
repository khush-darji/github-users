interface AvatarProps {
  user?: {
    avatar_url: string;
    login: string;
  };
}

const Avatar: React.FC<AvatarProps> = ({ user }) => (
  <img
    className="w-24 h-24 rounded-full mb-2"
    src={user?.avatar_url}
    alt={user?.login}
  />
);

export default Avatar;

interface BadgeProps {
  icon: JSX.Element;
  value?: number;
}

const Badge: React.FC<BadgeProps> = ({ icon, value }) => (
  <div className="flex items-center rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-white">
    {icon}
    <span className="ml-2">{value}</span>
  </div>
);

export default Badge;

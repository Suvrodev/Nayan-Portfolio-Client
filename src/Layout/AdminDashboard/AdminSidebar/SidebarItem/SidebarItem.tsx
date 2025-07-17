// components/AdminSidebar/SidebarItem.tsx

import { Link, useLocation } from "react-router";

interface SidebarItemProps {
  path: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ path, label }) => {
  const location = useLocation().pathname;

  const isActive = location === path;

  return (
    <Link
      to={path}
      className={`transition-all duration-300 hover:text-green-500 ${
        isActive ? "text-green-500 font-semibold" : "text-white"
      }`}
    >
      {label}
    </Link>
  );
};

export default SidebarItem;

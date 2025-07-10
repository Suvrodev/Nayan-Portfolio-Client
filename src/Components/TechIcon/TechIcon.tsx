// components/TechIcon.tsx
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import type { IconType } from "react-icons"; // ✅ Correct import

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const iconMap: Record<string, IconType> = {
  React: FaReact,
  Next: SiNextdotjs,
  Express: SiExpress,
  Node: FaNodeJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Python: FaPython,
};

const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = "",
  size = 24,
}) => {
  const IconComponent = iconMap[name] || null;

  return IconComponent ? (
    <IconComponent className={className} size={size} />
  ) : (
    <span className="text-gray-500 text-sm">?</span>
  );
};

export default TechIcon;

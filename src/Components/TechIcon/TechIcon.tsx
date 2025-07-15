// components/TechIcon.tsx
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import type { IconType } from "react-icons";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

// Normalize function: lowercase + remove ".js" + trim
const normalize = (name: string) =>
  name.toLowerCase().replace(/\.js$/, "").trim();

const iconMap: Record<string, IconType> = {
  react: FaReact,
  next: SiNextdotjs,
  express: SiExpress,
  node: FaNodeJs,
  html: FaHtml5,
  css: FaCss3Alt,
  python: FaPython,
};

const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = "",
  size = 24,
}) => {
  const normalized = normalize(name);
  const IconComponent = iconMap[normalized] || null;

  return IconComponent ? (
    <IconComponent className={className} size={size} />
  ) : (
    <span className="text-gray-500 text-sm">?</span>
  );
};

export default TechIcon;

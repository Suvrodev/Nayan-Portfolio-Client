// components/AdminSidebar/AdminSidebar.tsx
import logoImage from "@/assets/HeaderImage/Logo.png";
import { navItems, socialLinks } from "./sidebarData";
import { Link } from "react-router";
import SidebarItem from "./SidebarItem/SidebarItem";

const AdminSidebar = () => {
  return (
    <aside className="bg-[#141414] h-screen w-64 text-white px-6 py-10 flex flex-col justify-between sticky top-0 overflow-y-auto shadow-md shadow-blue-400">
      <div>
        {/* Logo */}
        <Link to="/" className="block mb-16">
          <img src={logoImage} alt="Logo" className="w-[70%]" />
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <SidebarItem key={item.path} path={item.path} label={item.label} />
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3 mt-8 flex-wrap">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-200 text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-[#cccccc] mt-10 space-y-3">
        <div>
          <span className="font-semibold">Email:</span> me@sarkarnayan.com
        </div>
        <div>
          <span className="font-semibold">Phone:</span> +88 01710847819
        </div>

        <div className="pt-3 text-xs">
          © 2024 Sarkar Nayan <br /> All Rights Reserved.
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;

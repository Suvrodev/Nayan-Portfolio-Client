import logoImage from "../../../../assets/HeaderImage/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaDribbble,
  FaBehance,
  FaGithub,
  FaLinkedin,
  FaPinterest,
  FaChevronDown,
} from "react-icons/fa";

import { Link, useLocation } from "react-router";
import goLink from "@/utils/Function/goLink";
import { adminNavItems } from "@/utils/Array/navItems";
import { useState } from "react";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/sarkarnayans" },
  { icon: <FaTwitter />, url: "https://twitter.com/sarkarnayans" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/sarkarnayans/" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sarkarnayans/" },
  { icon: <FaGithub />, url: "https://github.com/nayansarkars" },
  { icon: <FaBehance />, url: "https://www.behance.net/sarkarnayans" },
  { icon: <FaDribbble />, url: "https://dribbble.com/sarkarnayans" },
  { icon: <FaPinterest />, url: "https://www.pinterest.com/sarkarnayans" },
  { icon: <FaWhatsapp />, url: "https://wa.me/message/V3FSQYVKY6HQL1" },
];

const AdminHeader = () => {
  const location = useLocation()?.pathname;
  // console.log("Location: ", location);

  // Inside AdminHeader component
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };
  return (
    // <div className="bg-[#141414] min-h-screen text-white pl-8  sticky top-0 shadow-blue-400 shadow-md overflow-auto">
    <div className="bg-[#141414] h-screen overflow-y-auto text-white pl-8 sticky top-0 shadow-blue-400 shadow-md">
      {/* Logo */}
      <div className="mt-20 mb-28">
        <Link to="/">
          {/* <image src={logoImage} className="w-[70%]" /> */}
          <img src={logoImage} alt="Sarkar Nayan" className="w-[70%]" />
        </Link>
      </div>

      {/* Navigation */}

      <div className="flex flex-col gap-4 font-bold">
        {adminNavItems.map((item, index) =>
          item.children ? (
            <div key={index}>
              <div
                className="flex justify-between items-center cursor-pointer hover:text-green-500"
                onClick={() => toggleMenu(item.label)}
              >
                <span>{item.label}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openMenus.includes(item.label) ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`pl-4 flex flex-col gap-2 mt-2 transition-all overflow-hidden ${
                  openMenus.includes(item.label) ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className={`text-sm ${
                      location === child.path
                        ? "text-green-500"
                        : "text-gray-300"
                    } hover:text-green-400`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location === item.path ? "text-green-500" : "text-white"
              } hover:text-green-400`}
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 items-center mt-8">
        {socialLinks.map((item, index) => (
          <Link
            key={index}
            to=""
            onClick={() => goLink(item.url)}
            className="size-2 hover:scale-150 transition-all"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      {/* Contact Info */}
      <div className="pt-10 text-[rgb(204,204,204)] text-[15px]">
        <p>
          <span className="font-bold">Email:</span> me@sarkarnayan.com
        </p>
        <p>
          <span className="font-bold">Phone:</span> +88 01710847819
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 text-[#cccccc] text-[15px]">
        <p>
          Copyright ©2024 Sarkar Nayan <br /> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminHeader;

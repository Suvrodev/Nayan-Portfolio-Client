// components/AdminSidebar/sidebarData.ts
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
} from "react-icons/fa";

export const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Add Blog", path: "/dashboard/blog/add" },
  { label: "All Blogs", path: "/dashboard/blog/all" },
  { label: "Add Portfolio", path: "/dashboard/portfolio/add" },
  { label: "All Portfolios", path: "/dashboard/portfolio/all" },
  { label: "Add Service", path: "/dashboard/service/add" },
  { label: "All Services", path: "/dashboard/service/all" },
  { label: "Add Gig", path: "/dashboard/gigs/add" },
  { label: "All Gigs", path: "/dashboard/gigs/all" },
];

export const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/sarkarnayans" },
  { icon: FaTwitter, url: "https://twitter.com/sarkarnayans" },
  { icon: FaInstagram, url: "https://www.instagram.com/sarkarnayans/" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/sarkarnayans/" },
  { icon: FaGithub, url: "https://github.com/nayansarkars" },
  { icon: FaBehance, url: "https://www.behance.net/sarkarnayans" },
  { icon: FaDribbble, url: "https://dribbble.com/sarkarnayans" },
  { icon: FaPinterest, url: "https://www.pinterest.com/sarkarnayans" },
  { icon: FaWhatsapp, url: "https://wa.me/message/V3FSQYVKY6HQL1" },
];

export const navItems = [
  { path: "/home", label: "Home" },
  { path: "/service", label: "Service" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/about", label: "About" },
  { path: "/gigs", label: "Gigs" },
  // { path: "/project", label: "Project" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

// export const adminNavItems = [
//   { path: "/admin-dashboard/home", label: "Home" },
//   { path: "/admin-dashboard/service", label: "Service" },
//   { path: "/admin-dashboard/portfolio", label: "Portfolio" },
//   { path: "/about", label: "About" },
//   { path: "/admin-dashboard/gigs", label: "Gigs" },
//   { path: "/admin-dashboard/blog", label: "Blog" },
//   { path: "/admin-dashboard/contact", label: "Contact" },
// ];

export const adminNavItems = [
  { path: "/admin-dashboard/home", label: "Home" },
  { path: "/admin-dashboard/all-admin", label: "Admin" },
  { path: "/admin-dashboard/resume", label: "Resume" },
  {
    label: "Service Manager",
    children: [
      { path: "/admin-dashboard/service/add-servcie", label: "Add Service" },
      { path: "/admin-dashboard/service", label: "Service" },
    ],
  },
  {
    label: "Portfolio Manager",
    children: [
      {
        path: "/admin-dashboard/portfolio/add-portfolio",
        label: "Add Portfolio",
      },
      { path: "/admin-dashboard/portfolio", label: "Portfolio" },
    ],
  },
  {
    label: "Gigs Manager",
    children: [
      { path: "/admin-dashboard/gigs/add-gigs", label: "Add Gig" },
      { path: "/admin-dashboard/gigs", label: "Gigs" },
    ],
  },
  {
    label: "Blog Manager",
    children: [
      { path: "/admin-dashboard/blog/add-blog", label: "Add Blog" },
      { path: "/admin-dashboard/blog", label: "Blog" },
    ],
  },
  { path: "/about", label: "About" },
  { path: "/admin-dashboard/contact", label: "Contact" },
];

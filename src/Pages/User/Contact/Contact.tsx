import "./Contact.css";
import LinkBox from "@/components/LinkBox/LinkBox";
import goLink from "@/utils/Function/goLink";
import { useTitle } from "@/utils/hook/useTitle";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { Send } from "lucide-react";

const Contact = () => {
  useTitle("Contact");
  return (
    // <div className="overflow-hidden">
    //   <div className="pageMargin">
    //     <LinkBox text1={"Home  >  Contact"} />
    //     {/* <h1 className="my-10 text-3xl text-white font-bold">About Me</h1> */}
    //     <h1 className="my-10 pageTitle">About Me</h1>
    //     <div className="my-20">{/* <ContactBox /> */}</div>
    //     {/* <img src={mapImage} alt="" /> */}
    //     <div
    //       className=""
    //       onClick={() =>
    //         goLink(
    //           "https://www.google.com/maps/place/Sarkar+Nayan/@22.7992224,89.5565426,15z/data=!4m6!3m5!1s0x39ff8f6d0da24ee9:0xecfc2f0112caac29!8m2!3d22.7992224!4d89.5565426!16s%2Fg%2F11vxjcxy9w?entry=ttu"
    //         )
    //       }
    //     >
    //       {/* <img src={newMapImage} alt="" className="w-full" /> */}
    //     </div>

    //     <div className="my-10">{/* <SendMail /> */}</div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Side - Contact Info */}
        <div>
          <h4 className="text-purple-400 font-semibold mb-2">Contact Info</h4>
          <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
          <p className="text-gray-300 mb-6">
            Don’t be afraid man! Just say hello
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 border border-purple-500 rounded-full">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 5h18M9 3v2m6-2v2M4 7h16v12H4z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-gray-400">(302) 555-0107</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 border border-purple-500 rounded-full">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-400">tanya.hill@example.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="p-3 border border-purple-500 rounded-full">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.657 16.657L13.414 12 17.657 7.757M6.343 16.657L10.586 12 6.343 7.757"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm text-gray-400">775 Rolling Green Rd.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-black/30 p-8 rounded-xl border border-white/10 shadow-md">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Your Phone (optional)"
              className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Your subject"
              className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Type your message..."
            className="w-full bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
            Submit Now <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {[
          { icon: <FaFacebook />, label: "Facebook" },
          { icon: <FaTwitter />, label: "Twitter" },
          { icon: <FaDribbble />, label: "Dribbble" },
          { icon: <FaInstagram />, label: "Instagram" },
          { icon: <FaBehance />, label: "Behance" },
        ].map((item, idx) => (
          <button
            key={idx}
            className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full px-6 py-3 flex items-center gap-2 transition-all"
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-400">
        <p>
          Copyright © 2024{" "}
          <span className="text-purple-400 font-semibold">BentoX</span> — All
          Rights Reserved
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            About
          </a>
          <a href="#" className="hover:text-white">
            Project
          </a>
          <a href="#" className="text-purple-400">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

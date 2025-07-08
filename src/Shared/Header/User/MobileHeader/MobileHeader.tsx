import "./MobileHeader.css";
import { useState } from "react";
import logoImage from "../../../../assets/HeaderImage/Logo.png";
import { Link } from "react-router";
import MobileHeaderOption from "./MobileHeaderOption/MobileHeaderOption";
const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div className="">
    //   <div className="px-5 py-5 flex items-center justify-between bg-black opacity-80">
    //     <div>
    //       <Link to={"/"}>
    //         <img src={logoImage} alt="" className="w-[120px]" />
    //       </Link>
    //     </div>
    //     <div onClick={handlePressMenu}>
    //       <div className={` ${open ? "hidden" : "block"}`}>
    //         <MenuIcon />
    //       </div>
    //       <div className={` ${open ? "" : "hidden"}`}>
    //         <CloseIcon />
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className={`bg-black p-2 h-auto transition-all duration-700 ease-in-out ${
    //       open ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 hidden"
    //     }`}
    //   >
    //     <div className="flex flex-col gap-4 font-bold ">
    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/home"
    //       >
    //         Home
    //       </NavLink>

    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/service"
    //       >
    //         Service
    //       </NavLink>

    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/portfolio"
    //       >
    //         Portfolio
    //       </NavLink>

    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/about"
    //       >
    //         About
    //       </NavLink>

    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/gigs"
    //       >
    //         Gigs
    //       </NavLink>

    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/project"
    //       >
    //         Project
    //       </NavLink>

    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/blogs"
    //       >
    //         Blog
    //       </NavLink>

    //       <NavLink
    //         onClick={handlePressMenu}
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-500 font-extrabold" : ""
    //         }
    //         to="/contact"
    //       >
    //         Contact
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>

    <div className="relative bg-[#141414]">
      <div className="  w-full  flex justify-between items-center py-2 px-5 bgColor relative z-20">
        <div className="flex items-center justify-start gap-x-2  h-[50px]">
          {/* <img src={logo} alt="" className=" w-[50px] h-[50px] rounded-full" />
          <h1 className="font-bold">Boundless Reads</h1> */}
          <Link to={"/"}>
            <img src={logoImage} alt="" className="w-[150px] " />
          </Link>
        </div>
        <div className="">
          <div
            className={`menu-icon ${isOpen ? "open" : ""}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`absolute  w-full transition-all duration-700 ${
          //   isOpen ? "top-[66px] left-0" : "-top-[400px] "
          isOpen ? "top-[66px] right-0" : "top-[66px]  right-[800px]"
        }`}
      >
        <MobileHeaderOption handleClick={handleClick} />
      </div>
    </div>
  );
};

export default MobileHeader;

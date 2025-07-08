import "./MainLayout.css";
import Cursor from "@/components/Cursor/Cursor";
import WeAccept from "@/Pages/User/Home/WeAccept/WeAccept";
import Header from "@/Shared/Header/User/Desktop/Header";
import MobileHeader from "@/Shared/Header/User/MobileHeader/MobileHeader";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block ">
        <Header />
      </div>
      {/* <div className="w-full md:w-[80%] bg-[#333333]"> */}
      <div className="w-full md:w-[80%] ">
        <div className="hidden md:block">
          <Cursor />
        </div>
        <div className="md:hidden">
          <MobileHeader />
        </div>
        <Outlet />

        <div className="bg-[#222222] p-20">
          <WeAccept />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

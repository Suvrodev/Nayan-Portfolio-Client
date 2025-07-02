import Cursor from "@/Components/Cursor/Cursor";
import Header from "@/Shared/Header/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[25%] hidden md:block ">
        <Header />
      </div>
      <div className="w-full md:w-[75%] bg-[#333333]">
        <div className="hidden md:block">
          <Cursor />
          {/* <AnimatedCursor /> */}
        </div>
        <div className="md:hidden">{/* <MobileHeader /> */}</div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

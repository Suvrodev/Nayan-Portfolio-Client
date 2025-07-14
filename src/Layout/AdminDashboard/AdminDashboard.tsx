import StoreService from "@/components/StoreService/StoreService";
import WeAccept from "@/Pages/User/Home/WeAccept/WeAccept";
import AdminHeader from "@/Shared/Header/Admin/Desktop/AdminHeader";
import { Outlet } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block ">
        <AdminHeader />
      </div>
      {/* <div className="w-full md:w-[80%] bg-[#333333]"> */}
      <div className="w-full md:w-[80%] ">
        <div className="md:hidden sticky top-0">{/* <MobileHeader /> */}</div>
        <Outlet />

        <div className="bg-[#222222] p-20">
          <WeAccept />
        </div>

        {/* For Store Data */}
        <StoreService />
      </div>
    </div>
  );
};

export default AdminDashboard;

import { Outlet } from "react-router";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;

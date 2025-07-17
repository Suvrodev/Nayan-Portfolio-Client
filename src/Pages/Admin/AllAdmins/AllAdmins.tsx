import { useGetAllAdminQuery } from "@/redux/features/auth/authApi";

const AllAdmins = () => {
  const { data, isLoading } = useGetAllAdminQuery(undefined);
  const admins = data?.data;
  console.log("Admins: ", admins);
  return (
    <div>
      <h1>All Admins</h1>
    </div>
  );
};

export default AllAdmins;

import { useGetAllAdminQuery } from "@/redux/features/auth/authApi";
import type { TAdmin } from "@/utils/types/globalTypes";
import AdminTable from "./AdminTable";

const AllAdmins = () => {
  const { data, isLoading } = useGetAllAdminQuery(undefined);
  const admins = data?.data;
  // console.log("Admin:", admins);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Admins</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-700">
            <thead className="">
              <tr>
                <th className="px-4 py-2 border border-gray-700">#</th>
                <th className="px-4 py-2 border border-gray-700">Name</th>
                <th className="px-4 py-2 border border-gray-700">Email</th>
                <th className="px-4 py-2 border border-gray-700">Phone</th>
                <th className="px-4 py-2 border border-gray-700">Role</th>
                <th className="px-4 py-2 border border-gray-700">Block</th>
                <th className="px-4 py-2 border border-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {admins?.map((admin: TAdmin, index: number) => (
                <AdminTable key={index} admin={admin} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllAdmins;

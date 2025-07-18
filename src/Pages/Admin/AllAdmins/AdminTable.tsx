import {
  useDeleteAdminMutation,
  useUpdateAdminMutation,
} from "@/redux/features/auth/authApi";
import { sonarId } from "@/utils/Function/sonarId";
import type { TAdmin } from "@/utils/types/globalTypes";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

interface IProps {
  admin: TAdmin;
  index: number;
}
const AdminTable = ({ admin, index }: IProps) => {
  const [deleteAdmin] = useDeleteAdminMutation();
  const [updateAdmin] = useUpdateAdminMutation();
  const handleDeleteUser = async (email: string) => {
    console.log("email: ", email);
    toast.loading("Deleting", { id: sonarId });
    const res = await deleteAdmin(email).unwrap();
    console.log("Delete Res: ", res);
    if (res?.success) {
      toast.success("Admin deleted Successfully", { id: sonarId });
    }
  };

  const handleRole = async (email: string, role: string) => {
    const newRole = role === "admin" ? "user" : "admin";

    const updateData = {
      role: newRole,
    };

    const res = await updateAdmin({ email, updateData }).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success(res?.message, { id: sonarId });
    }
  };

  const handleBlock = async (email: string, isBlocked: boolean) => {
    const newIsBlocked = isBlocked ? false : true;
    const updateData = {
      isBlocked: newIsBlocked,
    };

    const res = await updateAdmin({ email, updateData }).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success(res?.message, { id: sonarId });
    }
  };

  return (
    <tr
      key={admin._id}
      className="text-center hover:bg-green-400 dark:hover:bg-gray-800 transition"
    >
      <td className="px-4 py-2 border border-gray-700">{index + 1}</td>
      <td className="px-4 py-2 border border-gray-700">
        {admin.firstName} {admin.lastName}
      </td>
      <td className="px-4 py-2 border border-gray-700">{admin.email}</td>
      <td className="px-4 py-2 border border-gray-700">{admin.phone}</td>
      <td className="px-4 py-2 border border-gray-700 ">
        <button
          className={`mx-auto w-[80%] flex justify-center items-center gap-2 px-4 py-1 text-white rounded-full shadow-2xl shadow-white hover:shadow-lg transition 
                               ${
                                 admin.role === "admin"
                                   ? " bg-green-500 hover:bg-green-600"
                                   : "bg-red-600 hover:bg-red-700 "
                               }`}
          onClick={() => handleRole(admin?.email, admin?.role)}
        >
          {admin?.role}
        </button>
      </td>

      {/* Block */}
      <td className="px-4 py-2 border border-gray-700 flex justify-center">
        <button
          className={`flex items-center gap-2 px-4 py-1 text-white rounded-full shadow-2xl shadow-white hover:shadow-lg transition 
                               ${
                                 admin.isBlocked
                                   ? "bg-red-600 hover:bg-red-700"
                                   : "bg-green-500 hover:bg-green-600 "
                               }`}
          onClick={() => handleBlock(admin?.email, admin?.isBlocked)}
        >
          {admin?.isBlocked?.toString()}
        </button>
      </td>

      {/* Delete */}
      <td className="px-4 py-2 border border-gray-700">
        <button
          className={`flex items-center gap-2 px-4 py-1 text-white rounded-full shadow-md hover:shadow-lg transition 
                               ${
                                 admin.role === "admin"
                                   ? "bg-red-600 hover:bg-red-700"
                                   : "bg-yellow-500 hover:bg-yellow-600 text-black"
                               }`}
          onClick={() => handleDeleteUser(admin?.email)}
        >
          <FaTrash />
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminTable;

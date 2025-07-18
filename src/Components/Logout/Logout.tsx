import { logOut } from "@/redux/features/auth/authSlics";
import { useDispatch } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div className="mt-8">
      <button
        onClick={() => dispatch(logOut())}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300 shadow-md hover:shadow-lg"
      >
        <FaSignOutAlt className="text-lg" />
        Logout
      </button>
    </div>
  );
};

export default Logout;

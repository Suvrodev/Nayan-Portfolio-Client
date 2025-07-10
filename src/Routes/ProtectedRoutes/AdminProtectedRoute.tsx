import { Navigate, useLocation } from "react-router";

import { useDispatch } from "react-redux";

import { useEffect, type ReactNode } from "react";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/Function/verifyToken";
import { logOut } from "@/redux/features/auth/authSlics";

interface IProps {
  children: ReactNode;
}
const AdminProtectedRoute = ({ children }: IProps) => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  // console.log("Token in Admin Protected Route: ", token);

  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any;
  if (token) {
    user = verifyToken(token);
  }
  console.log("Token User: ", user);

  useEffect(() => {
    if (!token || user?.role !== "admin") {
      dispatch(logOut());
    }
  }, [token, user?.role, dispatch]);

  if (!token) {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
  if (user?.role !== "admin") {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};

export default AdminProtectedRoute;

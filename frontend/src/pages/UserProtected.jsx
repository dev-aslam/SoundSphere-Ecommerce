import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UserProtected = () => {
  const { userInfo } = useSelector((state) => state.authUser);
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }
  if (!userInfo.isVerified) {
    return <Navigate to="/otp-verify" replace />;
  }
  return <Outlet />;
};

export default UserProtected;

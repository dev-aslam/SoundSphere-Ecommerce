import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminProtected = () => {
  const { userInfo } = useSelector((state) => state.authAdmin);
  return userInfo ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminProtected;

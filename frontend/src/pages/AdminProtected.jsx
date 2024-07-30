import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminProtected = () => {
  const { adminInfo } = useSelector((state) => state.authAdmin);
  return adminInfo ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminProtected;

import { Route, Routes } from "react-router-dom";

import Login from "../components/Admin/Login/Login";
import AdminProtected from "./AdminProtected";
import Layout from "../components/Admin/Shared/Layout";
import DashBoard from "../components/Admin/Dashboard/DashBoard";
import Orders from "../components/Admin/Orders/Orders";
import UserList from "../components/Admin/Customers/UserList";
import Products from "../components/Admin/Products/Products";
import Coupons from "../components/Admin/Coupons/Coupons";
import Category from "../components/Admin/Category/Category";
import Banners from "../components/Admin/Banners/Banners";
import SalesReport from "../components/Admin/SalesReport/SalesReport";
import AddCategory from "../components/Admin/Category/AddCategory";

const AdminWrapper = () => {
  return (
    <Routes>
      <Route path="login/" element={<Login />} />
      <Route path="/" element={<AdminProtected />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<UserList />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="categories" element={<Category />} />
          <Route path="addcategory" element={<AddCategory />} />
          <Route path="products" element={<Products />} />
          <Route path="banners" element={<Banners />} />
          <Route path="sales-report" element={<SalesReport />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AdminWrapper;

import { Route, Routes } from "react-router-dom";

import Login from "../components/User/Login/Login";
import UserProtected from "../pages/UserProtected";
import Register from "../components/User/Register/Register";
import Layout from "../components/User/Shared/Layout";
import Homepage from "../components/User/Homepage/Homepage";
import OtpVerify from "../components/User/Register/OtpVerify";
import Shop from "../components/User/Shop/Shop";
import ProductDetails from "../components/User/ProductDetails/ProductDetails";

const UserWrapper = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="otp-verify" element={<OtpVerify />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/" element={<UserProtected />}>
        <Route path="/" element={<Layout />}>
          <Route path="/wallet" element={<Homepage />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default UserWrapper;

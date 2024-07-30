import { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUserCredentials } from "../../../features/authUserSlice";
import { logoutUser } from "../../../api/services/User/authUser";
import { googleLogout } from "@react-oauth/google";
import "./shared.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userInfo } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoggedIn(userInfo ? true : false);
  }, [userInfo]);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    const response = await logoutUser();
    console.log(response.message);
    dispatch(clearUserCredentials());
    googleLogout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-11 py-5 border-b">
      <div className="flex justify-between items-center gap-10">
        <div className="navLogo flex items-center">
          <Link to="/">
            <h1 className="text-[32px] flex items-center">SoundSphere</h1>
          </Link>
        </div>
        <ul className="flex gap-6 poppins-regular items-center">
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>
      </div>
      <div className="flex gap-4 mr-4 relative">
        <FavoriteBorderOutlinedIcon className="cursor-pointer hover:text-blue-400" />
        <ShoppingCartOutlinedIcon className="cursor-pointer hover:text-blue-400" />
        <div
          className="profile cursor-pointer flex justify-center items-center gap-2 hover:text-blue-400"
          onClick={toggleDropdown}>
          {isLoggedIn ? <p className="capitalize">{userInfo?.name}</p> : ""}
          <AccountCircleOutlinedIcon className="hover:text-blue-400" />
          {isDropdownOpen && (
            <div className="dropdown-menu absolute right-0 -bottom-[85px] mt-2 w-48 bg-white border rounded shadow-md">
              {!isLoggedIn ? (
                <div>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-black hover:bg-gray-100">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-black hover:bg-gray-100">
                    Register
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-black hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./shared.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-11 py-5">
      <div className="flex justify-between items-center gap-10">
        <div className="navLogo flex items-center">
          <h1 className="text-[32px] flex items-center">SoundSphere</h1>
        </div>
        <ul className="flex gap-6 poppins-regular items-center">
          <li className="cursor-pointer hover:text-blue-500">Shop</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>
      </div>
      <div className="flex gap-4 mr-4">
        <FavoriteBorderOutlinedIcon className="cursor-pointer hover:text-blue-400" />
        <ShoppingCartOutlinedIcon className="cursor-pointer hover:text-blue-400" />
        <AccountCircleOutlinedIcon className="cursor-pointer hover:text-blue-400" />
      </div>
    </div>
  );
};
export default Header;

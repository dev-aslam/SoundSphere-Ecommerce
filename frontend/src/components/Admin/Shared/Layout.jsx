import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./shared.css";
import { clearAdminCredentials } from "../../../features/authAdminSlice.js";
import { useDispatch } from "react-redux";
import { adminLogout } from "../../../api/services/admin/authAdmin";

//MUI STUFF
import { useMediaQuery, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PeopleIcon from "@mui/icons-material/People";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import QrCodeIcon from "@mui/icons-material/QrCode";
import InventoryIcon from "@mui/icons-material/Inventory";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const dispatach = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const items = [
    {
      text: "Dashboard",
      icon: <SpaceDashboardIcon />,
      link: "/admin",
    },
    { text: "Orders", icon: <LocalMallIcon />, link: "/admin/orders" },
    { text: "Customers", icon: <PeopleIcon />, link: "/admin/users" },
    {
      text: "Coupon",
      icon: <ConfirmationNumberIcon />,
      link: "/admin/coupons",
    },
    { text: "Categories", icon: <QrCodeIcon />, link: "/admin/categories" },
    { text: "Products", icon: <InventoryIcon />, link: "/admin/products" },
    { text: "Banners", icon: <ViewCarouselIcon />, link: "/admin/banners" },
    {
      text: "Sales Report",
      icon: <AssessmentIcon />,
      link: "/admin/sales-report",
    },
  ];

  const handleLogout = async () => {
    const response = await adminLogout();
    console.log(response.message);
    dispatach(clearAdminCredentials());
  };

  const drawerContent = (
    <div className="w-[260px] bg-white h-screen sticky top-0 flex flex-col justify-between">
      <div>
        <div className="py-6 px-6 text-[32px] flex justify-center items-center">
          <header className="sidenavHead">SoundSphere</header>
        </div>
        <div className="px-4" id="menuItems">
          {items.map((item) => (
            <Link to={item.link} key={item.text}>
              <div
                className={`flex gap-2 py-2 px-4 my-2 rounded items-center ${
                  selected === item.text
                    ? "bg-[#f3f4f8] text-black"
                    : "text-[#8b909a]"
                } hover:text-black hover:bg-[#f3f4f8] cursor-pointer`}
                onClick={() => setSelected(item.text)}>
                <div>{item.icon}</div>
                <div>{item.text}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-4">
        <div
          className="flex gap-2 py-2 px-4 my-2 rounded items-center text-black hover:text-black hover:bg-[#f3f4f8] cursor-pointer mb-8"
          onClick={handleLogout}>
          <div>Logout</div>
          <div>
            <LogoutIcon />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-full h-full bg-[#F1F1F1]">
      {isMobile ? "" : drawerContent}
      <div style={{ sm: `calc(100% - 260px)` }} className="w-full h-full px-6">
        <div className="flex justify-between items-center w-full h-16 mt-4 mb-5">
          <div className="flex gap-2">
            {isMobile ? (
              <>
                <IconButton onClick={handleDrawerToggle}>
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Drawer
                  anchor="left"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}>
                  {drawerContent}
                </Drawer>
              </>
            ) : (
              <></>
            )}
            <h1 className="font-sans text-2xl font-semibold">{selected}</h1>
          </div>
          <div className="flex gap-4">
            <div className="cursor-pointer p-1 rounded-xl hover:bg-slate-300 hover:text-blue-500">
              <NotificationsIcon />
            </div>
            <div className="cursor-pointer p-1 rounded-xl hover:bg-slate-300 hover:text-blue-500">
              <AccountCircleIcon />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

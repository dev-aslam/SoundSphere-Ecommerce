import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className="bg-white sticky top-0 h-full z-50">
        <Header />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

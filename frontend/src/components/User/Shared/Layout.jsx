import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <Footer />
    </div>
  );
};
export default Layout;

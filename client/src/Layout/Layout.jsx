import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Aside from "../sections/Aside";

const Layout = () => {
  return (
    <div className="h-screen xl:w-full xl:mx-auto bg-black border">
      <div className="xl:w-[1440px] w-full mx-auto flex justify-around  border">
        <Navbar />
        <Outlet />
        <Aside />
      </div>
    </div>
  );
};

export default Layout;

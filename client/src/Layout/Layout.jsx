import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Aside from "../sections/Aside";

const Layout = () => {
  return (
    <div className=" h-screen w-full xl:mx-auto bg-black  mr-auto">
      <div className="container mx-auto  flex justify-between items-start ">
        <Navbar />
        <div className="flex flex-col border-[#2c2f33] border-[0.5px] h-screen gap-3 w-full  ">
          <Outlet />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Layout;

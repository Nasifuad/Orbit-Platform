// import { NavLink } from "react-router-dom";
import DarkLight from "@/components/DarkLight/DarkLight";

import { CiSearch } from "react-icons/ci";
const Aside = () => {
  return (
    <>
      <div className="flex-col ml-auto hidden xl:flex   p-2 -center items-center mt-[50px] gap-10">
        <DarkLight />
        <form>
          <div className=" border-[#2c2f33] border-[0.5px] rounded-full flex  xl:w-full relative">
            <CiSearch className="ml-2 text-3xl text-white z-20 absolute top-2 right-2" />
            <input
              type="text"
              placeholder="Search"
              className="text-2xl bg-transparent border-none px-4 py-2 text-white outline-none placeholder:text-[#2c2f33] border-[0.5px]"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Aside;

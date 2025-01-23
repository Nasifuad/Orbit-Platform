import SkeletonUI from "@/components/skeletonUi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Bookmarks = () => {
  return (
    <>
      <div>
        <div className="text-white flex gap-4 p-3 justify-start items-center">
          <NavLink to="/" className="text-2xl">
            <FaLongArrowAltLeft />
          </NavLink>
          <h1 className="text-3xl xl:text-4xl font-semibold ml-2">Bookmarks</h1>
        </div>
        <div className="p-4">
          <div className="flex flex-col gap-3 py-2 px-4 border-[#2c2f33] border-[0.5px] rounded-full">
            <div className="flex gap-2 items-center">
              <IoIosSearch className="text-2xl text-white" />
              <input
                type="text"
                placeholder="Search in the Bookmarks"
                className="text-xl bg-transparent border-none px-4 py-2 text-white outline-none placeholder:text-[#2c2f33] border-[0.5px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-4xl text-white font-semibold p-4">
            Save Posts for later
          </h1>
          <SkeletonUI />
        </div>
      </div>
    </>
  );
};

export default Bookmarks;

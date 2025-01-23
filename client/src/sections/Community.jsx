import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import { NavLink } from "react-router-dom";
import { miniNavCommunities } from "@/constants/constants";
import MiniNav from "@/components/MiniNav";
const Community = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center p-3">
          <div className="text-white flex gap-4 p-3 justify-start items-center">
            <NavLink to="/" className="text-2xl">
              <FaLongArrowAltLeft className="text-3xl text-white" />
            </NavLink>
            <h1 className="text-3xl xl:text-4xl font-semibold ml-2">
              Communities
            </h1>
          </div>
          <div>
            <IoIosSearch className="text-3xl text-white" />
          </div>
        </div>
        <div>
          <MiniNav nav={miniNavCommunities} />
        </div>
      </div>
    </>
  );
};

export default Community;

import { NavLink } from "react-router-dom";

const MiniNav = () => {
  return (
    <div className="flex gap-4 items-center bg-transparent backdrop-blur-md p-6 text-white text-xl justify-between sticky top-0 z-50 w-full border-[#2c2f33] border-b-[0.5px]">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-blue-500 after:content-['_']"
            : "text-gray-400"
        }
      >
        For Fou
      </NavLink>
      <NavLink
        to={"/following"}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-blue-500" : "text-gray-400"
        }
      >
        Following
      </NavLink>
      <NavLink
        to={"/communities"}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-blue-500" : "text-gray-400"
        }
      >
        Communities
      </NavLink>
    </div>
  );
};

export default MiniNav;

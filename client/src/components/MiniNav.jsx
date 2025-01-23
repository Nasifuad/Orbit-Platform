/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MiniNav = ({ nav }) => {
  return (
    <>
      <div className="flex gap-4 items-center bg-transparent backdrop-blur-md p-6 text-white text-xl justify-between sticky top-0 z-50 w-full border-[#2c2f33] border-b-[0.5px]">
        {nav.map((link) => {
          return (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-blue-500 "
                  : "text-gray-400 hover:bg-slate-800 hover:text-white px-6 py-2 rounded-full"
              }
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
      );
    </>
  );
};

export default MiniNav;

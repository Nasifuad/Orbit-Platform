import { NavLink } from "react-router-dom";
import { navLinks } from "../constants/constants.jsx";
import logo from "../assets/images/orbit.svg";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center mt-2">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
        </NavLink>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const { to, name, icon } = link;
            return (
              <>
                <div className=" px-5 py-2 rounded-full flex gap-4 hover:bg-[#2c2f33] transition duration-300 w-max justify-start items-start">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-bold flex items-center gap-6"
                        : "text-gray-400 flex items-center gap-6"
                    }
                  >
                    {/* Icon */}
                    <p className="text-3xl">{icon}</p>

                    {/* Label */}
                    <span className="text-2xl font-semibold">{name}</span>
                  </NavLink>
                </div>
              </>
            );
          })}
        </div>
        <h1 className="text-black text-2xl font-bold bg-gray-200 p-2 rounded-full text-center cursor-pointer hover:bg-gray-300">
          Post
        </h1>
      </div>
    </>
  );
};

export default Navbar;

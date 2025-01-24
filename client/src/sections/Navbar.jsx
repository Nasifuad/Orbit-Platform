import { NavLink } from "react-router-dom";
import { navLinks } from "../constants/constants.jsx";
import { Button } from "@/components/ui/button";
import logo from "../assets/images/orbit.svg";
import { useState } from "react";
import SignUp from "@/components/SignUp.jsx";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [togglelogin, setToggleLogin] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <div className="flex flex-col gap-3 h-screen p-4">
        <NavLink to="/">
          {" "}
          <img
            src={logo}
            alt="logo"
            className="xl:w-[100px] xl:h-[100px] w-20 h-20 sm:mx-auto justify-start xl:mx-1"
          />
        </NavLink>
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) => {
            const { to, name, icon } = link;
            return (
              <>
                <div
                  className=" px-5 py-2 rounded-full flex gap-4 hover:bg-[#2c2f33] transition duration-300 w-max justify-start items-start"
                  key={index}
                >
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
                    <span className="text-2xl font-semibold hidden   xl:flex">
                      {name}
                    </span>
                  </NavLink>
                </div>
              </>
            );
          })}
        </div>
        <h1 className="text-black text-xl font-bold bg-gray-200 p-2 rounded-full justify-center  cursor-pointer hover:bg-gray-300 hidden xl:flex">
          Post
        </h1>
        <Button value="jeee" onClick={() => setToggleLogin(!togglelogin)}>
          Login
        </Button>
        <Button variant="outline" onClick={(e) => handleToggle(e)}>
          Signup
        </Button>
        {toggle && <SignUp setToggle={setToggle} />}
        {togglelogin && <SignUp setToggle={setToggleLogin} />}
      </div>
    </>
  );
};

export default Navbar;

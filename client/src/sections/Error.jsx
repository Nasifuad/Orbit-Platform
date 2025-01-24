import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="text-white ">You Have clicked the wrong link</div>
      <NavLink
        to="/home/you"
        className="text-white bg-blue-400 w-max p-2 rounded-full"
      >
        GO BACK TO HOME
      </NavLink>
    </>
  );
};

export default Error;

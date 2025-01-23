// import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const Aside = () => {
  return (
    <>
      <div className="xl:flex flex-col gap-3 ml-auto hidden md:flex md:w-1/3  ">
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

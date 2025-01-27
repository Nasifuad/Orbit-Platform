import { NavLink } from "react-router-dom";
import cover from "../assets/images/cover.jpeg";
import { MdVerified } from "react-icons/md";
import { miniNavProfile } from "@/constants/constants";
import MiniNav from "@/components/MiniNav";
import { useStore } from "@/store/ZusStore";

const Profile = () => {
  const { user } = useStore();
  console.log("User from Profile", user);
  return (
    <>
      <div className="relative border p-4">
        <img
          src={cover}
          alt="cover"
          className="object-cover  w-full h-[200px] "
        />
        <div className=" flex justify-between w-full items-center  px-4">
          <div>
            <img
              src={cover}
              alt="dp"
              className="  w-32 rounded-full border-4 border-gray-400 hover:opacity-80"
            />
            <div className="mt-2 flex gap-2">
              <p className="text-white text-xl font-bold">
                {user ? user : "Guest"}
              </p>
              <div className="px-2 flex justify-center items-center gap-2 border rounded-full">
                <MdVerified className="text-blue-600" />
                <p className="text-white hidden  xl:flex">Get Verified</p>
              </div>
            </div>
          </div>
          <button className="text-white text-xl font-bold mr-4">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h1 className="text-gray-400">illusion in the air</h1>
          <div className="text-white flex gap-2">
            <p>Dhaka</p>
            <p>Joined January 2025</p>
          </div>
          <div className="text-gray-500 flex gap-2">
            <NavLink className="hover:underline">6 Followers</NavLink>
            <NavLink className="hover:underline">6 Following</NavLink>
          </div>
        </div>
      </div>
      <MiniNav nav={miniNavProfile} />
    </>
  );
};

export default Profile;

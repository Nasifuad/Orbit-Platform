import { GoGear } from "react-icons/go";
import { LuMailPlus } from "react-icons/lu";
const Messages = () => {
  return (
    <>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <h1 className="text-white text-2xl xl:text-4xl font-bold ">
            Messages
          </h1>
          <div className="text-white flex gap-2 text-2xl">
            <GoGear />
            <LuMailPlus />
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center gap-3 h-full">
          <h1 className="text-3xl xl:text-6xl text-white font-semibold">
            Welcome to your <span className="bg-blue-700 px-2">inbox!</span>
          </h1>
          <p className="text-sm text-gray-500 w-1/2">
            Drop a line, share posts and more with private conversations between
            you and others on Orbit
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-full">
            Write a message
          </button>
        </div>
      </div>
    </>
  );
};

export default Messages;

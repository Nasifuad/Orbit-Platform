import MiniNav from "@/components/MiniNav";
//import react search icon
import { CiSearch } from "react-icons/ci";
//import settings icon
import { CiSettings } from "react-icons/ci";
import { miniNavSerach } from "@/constants/constants";
import SkeletonUI from "@/components/skeletonUi";
import useStore from "@/store/ZusStore";
import { useEffect } from "react";
const Explore = () => {
  // const tasks = useStore((state) => state.tasks);
  // const addTask = useStore((state) => state.addTask);
  const { tasks, addTask } = useStore();
  console.log(addTask, tasks);
  useEffect(() => {
    addTask({ id: 3, title: "Task 3", description: "Description 3" });
    console.log(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex justify-between gap-10 items-center p-4">
        <div className="px-2 flex gap-2 w-full border border-[#2c2f33] rounded-full p-2 justify-start items-center ">
          <CiSearch className="ml-2 text-gray-500 text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="border-none bg-transparent outline-none placeholder:text-gray-500 text-[#2c2f33] text-xl px-2"
          />
        </div>
        <CiSettings className="text-white text-2xl" />
      </div>
      <MiniNav nav={miniNavSerach} />
      <SkeletonUI />
    </>
  );
};

export default Explore;

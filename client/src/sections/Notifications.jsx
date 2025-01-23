import MiniNav from "@/components/MiniNav";
import SkeletonUI from "@/components/skeletonUi";
import { miniNavNotifications } from "@/constants/constants";
const Notifications = () => {
  return (
    <>
      <div className="flex flex-col gap-3  p-4">
        <h1 className="text-white text-3xl px-4 pt-2 font-semibold ">
          {" "}
          Notifications
        </h1>
        <MiniNav nav={miniNavNotifications} />

        <h1 className="text-3xl text-white text-center">
          Nothing to See here yet
        </h1>
        <p className="text-center text-xl text-white">
          Notifications will appear if there is any
        </p>
      </div>
      <SkeletonUI />
    </>
  );
};

export default Notifications;

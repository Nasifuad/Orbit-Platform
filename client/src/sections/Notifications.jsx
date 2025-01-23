import MiniNav from "@/components/MiniNav";
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
      </div>
    </>
  );
};

export default Notifications;

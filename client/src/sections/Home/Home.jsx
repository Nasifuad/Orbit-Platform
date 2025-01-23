import MiniNav from "@/components/MiniNav";
import { miniNavHome } from "@/constants/constants";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Hello
      <MiniNav nav={miniNavHome} />
      <Outlet />
    </div>
  );
};

export default Home;

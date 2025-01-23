import MiniNav from "@/components/MiniNav";
import Post from "@/components/Post";
import SkeletonUI from "@/components/skeletonUi";

import { miniNavHome } from "@/constants/constants";
const Content = () => {
  return (
    <>
      <MiniNav nav={miniNavHome} />
      <Post />
      <SkeletonUI />
    </>
  );
};

export default Content;

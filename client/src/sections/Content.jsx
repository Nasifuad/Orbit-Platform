import Post from "@/components/Post";
import SkeletonUI from "@/components/skeletonUi";

const Content = () => {
  return (
    <>
      {/* <MiniNav nav={miniNavHome} /> */}
      <Post />
      <SkeletonUI />
    </>
  );
};

export default Content;

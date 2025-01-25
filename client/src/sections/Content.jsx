import Post from "@/components/Post";
import SkeletonUI from "@/components/skeletonUi";
import { useQuery } from "@tanstack/react-query";
import {
  FaTwitter,
  FaUser,
  FaCalendarAlt,
  FaHeart,
  FaShare,
  FaComment,
} from "react-icons/fa";
const Content = () => {
  const getPosts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch("http://localhost:5050/api/getpost");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    enabled: true,
  });

  // if (isLoading) return <SkeletonUI />;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <>
      <Post />
      {isLoading && <SkeletonUI />}
      <div className="text-white border-[#2c2f33] border-[0.5px] p-5">
        {data?.map((post) => (
          <div
            key={post._id}
            className="border-b-[0.5px] border-[#2c2f33] pb-3 mb-3"
          >
            <div
              className="flex items-center mb-2 justify-between border-b-[0.5px] border-[#2c2f33]
            pb-2"
            >
              <div className="flex gap-2 justify-center items-center ">
                <FaUser className="text-lg" />
                <p className="text-lg font-bold">{post.username}</p>
              </div>
              <div className="flex gap-2">
                <FaCalendarAlt className="mr-2" />
                <p>{post.date}</p>
              </div>
            </div>
            <p className="mx-auto p-4">{post.content}</p>
          </div>
        ))}
        <div className="flex justify-between mt-2 px-2">
          <button className="flex items-center">
            <FaHeart className="mr-1" /> Like
          </button>
          <button className="flex items-center">
            <FaComment className="mr-1" /> Comment
          </button>
          <button className="flex items-center">
            <FaShare className="mr-1" /> Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;

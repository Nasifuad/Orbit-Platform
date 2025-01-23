import { FiHome } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuAlignVerticalJustifyCenter } from "react-icons/lu";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdGroup } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

export const navLinks = [
  {
    to: "/home",
    name: "Home",
    icon: <FiHome />,
  },
  {
    to: "/search",
    name: "Search",
    icon: <CiSearch />,
  },
  {
    to: "/notifications",
    name: "Notifications",
    icon: <CiBellOn />,
  },
  {
    to: "/messages",
    name: "Messages",
    icon: <MdOutlineEmail />,
  },
  {
    to: "/bookmarks",
    name: "Bookmarks",
    icon: <CiBookmarkPlus />,
  },
  {
    to: "/lists",
    name: "Lists",
    icon: <LuAlignVerticalJustifyCenter />,
  },
  {
    to: "/community",
    name: "Community",
    icon: <MdGroup />,
  },
  {
    to: "/more",
    name: "More",
    icon: <AiTwotoneThunderbolt />,
  },
  {
    to: "/profile",
    name: "Profile",
    icon: <CiUser />,
  },
  {
    to: "/settings",
    name: "Settings",
    icon: <CiSettings />,
  },
];

export const miniNavHome = [
  {
    to: "you",
    name: "For you",
  },
  {
    to: "following",
    name: "Following",
  },
  {
    to: "communities",
    name: "Communities",
  },
];
export const miniNavSerach = [
  {
    to: "/news",
    name: "News",
  },
  {
    to: "/trending",
    name: "Trending",
  },
  {
    to: "/sports",
    name: "Sports",
  },
  {
    to: "/entertainment",
    name: "Entertainment",
  },
];
export const miniNavNotifications = [
  {
    to: "/all",
    name: "All",
  },
  {
    to: "/mentions",
    name: "Mentions",
  },
  {
    to: "/replies",
    name: "Replies",
  },
];

export const miniNavCommunities = [
  {
    to: "/home",
    name: "Home",
  },
  {
    to: "/Explore",
    name: "Explore",
  },
];

export const miniNavProfile = [
  {
    to: "/",
    name: "Posts",
  },
  {
    to: "/replies",
    name: "Replies",
  },
  {
    to: "/likes",
    name: "Likes",
  },
  {
    to: "/highlights",
    name: "Highlights",
  },
  {
    to: "/articles",
    name: "Articles",
  },
  {
    to: "/media",
    name: "Media",
  },
];

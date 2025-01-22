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
    to: "/",
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

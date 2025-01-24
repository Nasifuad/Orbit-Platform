import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Content from "../sections/Content";
import Explore from "../sections/Explore";
import Notifications from "../sections/Notifications";
import Messages from "../sections/Messages";
import Bookmarks from "../sections/Bookmarks";
import Profile from "../sections/Profile";
import Lists from "../sections/Lists";
import More from "../sections/More";
import Community from "../sections/Community";
import Settings from "../sections/Settings";
import Home from "../sections/Home/Home";
import Following from "@/sections/Following";
import Error from "@/sections/Error";
import News from "@/sections/News";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}>
        <Route index element={<Content />} />
        <Route path="following" element={<Following />} />
      </Route>
      <Route path="/search" element={<Explore />}>
        <Route path="" element={<News />} />
      </Route>
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/community" element={<Community />} />
      <Route path="/more" element={<More />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path={"*"} element={<Error />} />
    </Route>
  )
);

export default router;

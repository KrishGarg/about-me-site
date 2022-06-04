import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BiTestTube } from "react-icons/bi";

export interface Route {
  path: string;
  name: string;
  icon: IconType;
}

const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    name: "About",
    path: "/about",
    icon: FcAbout,
  },
  {
    name: "Example",
    path: "/example",
    icon: BiTestTube,
  },
];

export default routes;

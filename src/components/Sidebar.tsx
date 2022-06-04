import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useRecoilValue } from "recoil";

import Logo from "./Logo";
import { navbar as navbarState } from "@/lib/state";
import CloseNavbarButton from "./CloseNavbar";
import useIsMobile from "@/hooks/useIsMobile";
import sidebarRoutes from "@/lib/sidebarRoutes";
import SidebarRoute from "./SidebarRoute";

const variants: Variants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: "0",
  },
};

const Navbar: FC = () => {
  const isMobile = useIsMobile();
  const controls = useAnimation();
  const navbar = useRecoilValue(navbarState);

  useEffect(() => {
    if (isMobile) {
      if (!navbar) controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [isMobile, controls, navbar]);

  useEffect(() => {
    if (navbar) {
      controls.start("visible");
    }
  }, [navbar, controls]);

  return (
    <motion.div
      variants={variants}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="h-screen min-w-[13rem] md:min-w-[12rem] absolute md:static bg-soft-black-400 z-10 flex items-center flex-col"
    >
      <div className="flex justify-evenly items-center flex-col md:block">
        <div className="mr-2 md:mr-0">
          <Logo />
        </div>
        {isMobile && <CloseNavbarButton />}
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full">
        {sidebarRoutes.map((route) => (
          <SidebarRoute key={route.path} route={route} />
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;

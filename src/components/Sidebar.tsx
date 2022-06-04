import { FC, useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";

import Logo from "./Logo";
import { sidebar as sidebarState } from "@/lib/state";
import CloseSidebarButton from "./CloseSidebar";
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

const Sidebar: FC = () => {
  const isMobile = useIsMobile();
  const controls = useAnimation();
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const componentDivRef = useRef(null);

  useEffect(() => {
    if (isMobile) {
      if (!sidebar) {
        controls.start("hidden");
      } else {
        controls.start("visible");
      }
    } else {
      controls.set("visible");
    }
  }, [isMobile, controls, sidebar]);

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (!isMobile) return;
      if (!sidebar) return;
      if (
        componentDivRef.current &&
        !ev.composedPath().includes(componentDivRef.current)
      ) {
        // clicked somewhere away from sidebar
        setSidebar((cur) => !cur);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [sidebar, setSidebar, isMobile]);

  return (
    <motion.div
      variants={variants}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="h-screen min-w-[13rem] md:min-w-[12rem] absolute md:static bg-soft-black-400 z-10 flex items-center flex-col"
      ref={componentDivRef}
    >
      <div className="flex justify-evenly items-center flex-col md:block">
        <div className="mr-2 md:mr-0">
          <Logo />
        </div>
        {isMobile && <CloseSidebarButton />}
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full">
        {sidebarRoutes.map((route) => (
          <SidebarRoute key={route.path} route={route} />
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;

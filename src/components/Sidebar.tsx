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

let firstLoadDone = false;

const Sidebar: FC = () => {
  const isMobile = useIsMobile();
  const controls = useAnimation();
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const componentDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      if (!sidebar) {
        if (firstLoadDone) {
          controls.start("hidden");
        } else {
          controls.set("hidden");
          firstLoadDone = true;
        }
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

  useEffect(() => {
    setTimeout(() => {
      componentDivRef.current?.classList.remove("hidden");
    }, 100); // to prevent a flicker of sidebar
  }, []);

  return (
    <motion.div
      variants={variants}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`h-screen min-w-[13rem] md:min-w-[12rem] absolute md:static bg-soft-black-400 z-10 flex items-center flex-col ${
        isMobile && "hidden"
      }`}
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

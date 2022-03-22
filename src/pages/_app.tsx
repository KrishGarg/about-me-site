import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AnimationProps } from "framer-motion/types/motion/types";

import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const pageVariant: AnimationProps["variants"] = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: "0",
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
  exit: {
    x: "-100vh",
  },
};

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const [isPageChanging, setIsPageChanging] = useState(false);
  const [isLoadingAnimationDone, setIsLoadingAnimationDone] = useState(true);
  const [lastRoute, setLastRoute] = useState("");

  useEffect(() => {
    // watching router just for the edge case of router taking longer than loading animation
    const handleRouteStart = (
      currentRoute: string,
      info: { shallow: boolean }
    ) => {
      if (info.shallow) return;
      // Only trigger loading if route changed
      if (currentRoute === lastRoute) return;
      setLastRoute(currentRoute);
      setIsPageChanging(true);
      setIsLoadingAnimationDone(false);
    };

    const handleRouteEnd = () => {
      setIsPageChanging(false);
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
    router.events.on("routeChangeError", handleRouteEnd);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteEnd);
      router.events.off("routeChangeError", handleRouteEnd);
    };
  }, [router, lastRoute]);

  return (
    <>
      <Navbar />
      <div className="mx-2">
        <AnimatePresence exitBeforeEnter={true}>
          {!isPageChanging && isLoadingAnimationDone ? (
            <motion.div
              variants={pageVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              key={router.route}
            >
              <Component {...pageProps} />
            </motion.div>
          ) : (
            <Loading
              key="loading"
              setIsLoadingAnimationDone={setIsLoadingAnimationDone}
              howLong={2000}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;

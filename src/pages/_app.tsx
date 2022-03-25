import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AnimationProps } from "framer-motion/types/motion/types";
import { RecoilRoot, useRecoilValue } from "recoil";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

import { loading as loadingState } from "@/lib/state";

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

const Page: FC = ({ children }) => {
  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const [isPageChanging, setIsPageChanging] = useState(false);
  const [isLoadingAnimationDone, setIsLoadingAnimationDone] = useState(true);
  const [lastRoute, setLastRoute] = useState("");

  const loading = useRecoilValue(loadingState);

  const loadingRef = useRef<null | LoadingBarRef>(null);

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
      (loadingRef.current as any)?.continuousStart();
    };

    const handleRouteEnd = () => {
      setIsPageChanging(false);
      if (!loading) setIsLoadingAnimationDone(true);
      loadingRef.current?.complete();
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
    router.events.on("routeChangeError", handleRouteEnd);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteEnd);
      router.events.off("routeChangeError", handleRouteEnd);
    };
  }, [router, lastRoute, loading]);

  return (
    <>
      {!loading && <LoadingBar color="#232b2b" height={4} ref={loadingRef} />}
      <Navbar />
      <div className="mx-2">
        <AnimatePresence exitBeforeEnter={true}>
          {loading ? (
            !isPageChanging && isLoadingAnimationDone ? (
              <Page key={router.route}>
                <Component {...pageProps} />
              </Page>
            ) : (
              <Loading
                key="loading"
                setIsLoadingAnimationDone={setIsLoadingAnimationDone}
                howLong={2000}
              />
            )
          ) : (
            <Page key={router.route}>
              <Component {...pageProps} />
            </Page>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const ToExportApp: FC<AppProps> = (props) => {
  return (
    <RecoilRoot>
      <App {...props} />
    </RecoilRoot>
  );
};

export default ToExportApp;

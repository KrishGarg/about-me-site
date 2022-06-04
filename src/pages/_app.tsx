import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FC, useRef } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { RecoilRoot } from "recoil";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

import Sidebar from "@/components/Sidebar";
import useHandleLoadingBar from "@/hooks/useHandleLoadingBar";

const pageVariant: Variants = {
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
  const loadingRef = useRef<null | LoadingBarRef>(null);

  useHandleLoadingBar(loadingRef);

  return (
    <div className="md:flex">
      <Sidebar />
      <div className="mx-2 p-4">
        <LoadingBar color="#1a1a1a" height={4} ref={loadingRef} />
        <AnimatePresence exitBeforeEnter={true}>
          <Page key={router.route}>
            <Component {...pageProps} />
          </Page>
        </AnimatePresence>
      </div>
    </div>
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

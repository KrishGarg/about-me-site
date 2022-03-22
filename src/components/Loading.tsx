import { Dispatch, FC, SetStateAction } from "react";
import { AnimationProps, motion } from "framer-motion";

interface LoadingProps {
  setIsLoadingAnimationDone: Dispatch<SetStateAction<boolean>>;
  howLong?: number;
}

const loadingVariants: AnimationProps["variants"] = {
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
    x: "100vw",
    transition: {
      duration: 2,
    },
  },
};

const Loading: FC<LoadingProps> = ({ setIsLoadingAnimationDone, howLong }) => {
  return (
    <motion.div
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={(def) => {
        // only set timeout after animate and not after exit
        if (def !== "animate") return;
        setTimeout(() => {
          setIsLoadingAnimationDone(true);
        }, howLong ?? 3000);
      }}
    >
      Loading
    </motion.div>
  );
};

export default Loading;

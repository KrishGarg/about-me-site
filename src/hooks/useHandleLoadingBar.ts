import { MutableRefObject, useEffect } from "react";
import { LoadingBarRef } from "react-top-loading-bar";
import { useRouter } from "next/router";

const useHandleLoadingBar = (
  loadingRef: MutableRefObject<LoadingBarRef | null>
) => {
  const router = useRouter();

  useEffect(() => {
    // watching router just for the edge case of router taking longer than loading animation
    const handleRouteStart = (_: any, info: { shallow: boolean }) => {
      if (info.shallow) return;
      (loadingRef.current as any)?.continuousStart();
    };

    const handleRouteEnd = () => {
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
  }, [router, loadingRef]);
};

export default useHandleLoadingBar;

import type { NextPage } from "next";
import Link from "next/link";

import CloseSidebarButton from "@/components/CloseSidebar";
import useIsMobile from "@/hooks/useIsMobile";

const Home: NextPage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Link href="/example">
        <a>To Example</a>
      </Link>
      {isMobile && <CloseSidebarButton />}
    </>
  );
};

export default Home;

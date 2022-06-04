import type { NextPage } from "next";
import Link from "next/link";

import CloseNavbarButton from "@/components/CloseNavbar";
import useIsMobile from "@/hooks/useIsMobile";

const Home: NextPage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Link href="/example">
        <a>To Example</a>
      </Link>
      {isMobile && <CloseNavbarButton />}
    </>
  );
};

export default Home;

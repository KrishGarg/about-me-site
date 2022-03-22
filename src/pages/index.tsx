import type { NextPage } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("/example")}>To Example</Button>
      <Link href="/example">
        <a>To Example</a>
      </Link>
    </>
  );
};

export default Home;

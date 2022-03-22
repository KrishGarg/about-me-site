import Link from "next/link";
import type { GetServerSideProps } from "next";

const Example = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 8000);
  });

  return {
    props: {},
  };
};

export default Example;

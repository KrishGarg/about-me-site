import type { NextPage } from "next";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Button>Test Btn</Button>
    </>
  );
};

export default Home;

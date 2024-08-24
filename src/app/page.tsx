import Wavy from "@/components/Wavy";
import Name from "@/components/Name";

const Home = () => {
  return (
    <section className="relative h-[50vh] bg-teal-400">
      <div className="flex justify-center h-[50%] w-full items-center">
        <Name />
      </div>
      <Wavy />
    </section>
  );
};

export default Home;

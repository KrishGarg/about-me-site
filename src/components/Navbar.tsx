import { FC } from "react";

import Logo from "./Logo";

const Navbar: FC = () => {
  return (
    <div className="w-screen flex justify-between mb-4 bg-gradient-to-b from-soft-black-200 to-soft-black-300">
      <Logo />
    </div>
  );
};

export default Navbar;

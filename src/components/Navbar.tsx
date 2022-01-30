import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: FC = () => {
  const [shouldItemsBeVisible, setShouldItemsBeVisible] = useState(false);

  return (
    <>
      <div
        className="
        relative top-0 w-full min-h-[5rem] 
        bg-gradient-to-t from-gray-500 to-gray-600 md:from-gray-600
        flex justify-between items-center z-[3]"
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <a className="noTapHighlight">
              <Image
                src="/logo-small-darkmode.png"
                alt="logo"
                width={80}
                height={80}
                layout="fixed"
                className="!left-2 !top-2"
                priority
              />
            </a>
          </Link>
        </div>

        {/* Nav Items */}
        <div>
          <GiHamburgerMenu
            color="#fff"
            className="md:hidden mr-4"
            size="1.5rem"
            onClick={() => setShouldItemsBeVisible((s) => !s)}
          />
        </div>
      </div>
      <NavbarMobileItems shouldItemsBeVisible={shouldItemsBeVisible} />
    </>
  );
};

interface NavbarMobileItemsProps {
  shouldItemsBeVisible: boolean;
}

const NavbarMobileItems: FC<NavbarMobileItemsProps> = ({
  shouldItemsBeVisible: vis,
}) => {
  return (
    <div
      className={`z-[2] absolute -translate-y-full transition-all 
      ${vis && "translate-y-0"} w-full 
      bg-gradient-to-b from-gray-500 to-gray-600
      space-y-2 pb-4`}
    >
      <NavbarMobileItem to="/">Test1</NavbarMobileItem>
      <NavbarMobileItem to="/">Test2</NavbarMobileItem>
      <NavbarMobileItem to="/">Test3</NavbarMobileItem>
      <NavbarMobileItem to="/">Test4</NavbarMobileItem>
    </div>
  );
};

interface NavbarMobileItemProps {
  to: string;
}

const NavbarMobileItem: FC<NavbarMobileItemProps> = ({ children, to }) => {
  return (
    <Link href={to}>
      <a
        className="
        block font-roboto text-white p-2 
        active:bg-gray-600 focus:bg-gray-600 
        rounded noTapHighlight transition-all"
      >
        {children}
      </a>
    </Link>
  );
};

export default Navbar;

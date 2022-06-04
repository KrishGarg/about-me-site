import { useRecoilState } from "recoil";

import { navbar as navbarState } from "@/lib/state";

const CloseNavbarButton = () => {
  const [navbar, setNavbar] = useRecoilState(navbarState);
  return (
    <button
      className={`hamburger text-gray-100 ${
        navbar && "is-active"
      } hamburger--spin`}
      type="button"
      onClick={() => {
        setNavbar((cur) => !cur);
      }}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default CloseNavbarButton;

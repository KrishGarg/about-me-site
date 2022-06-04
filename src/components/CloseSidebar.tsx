import { useRecoilState } from "recoil";

import { sidebar as sidebarState } from "@/lib/state";

const CloseSidebarButton = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  return (
    <button
      className={`hamburger text-gray-100 ${
        sidebar && "is-active"
      } hamburger--spin`}
      type="button"
      onClick={() => {
        setSidebar((cur) => !cur);
      }}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default CloseSidebarButton;

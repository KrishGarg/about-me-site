import useStore from "@/lib/state";

const CloseSidebarButton = () => {
  const sidebar = useStore((state) => state.sidebar);
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  return (
    <button
      className={`hamburger text-gray-100 ${
        sidebar && "is-active"
      } hamburger--spin`}
      type="button"
      onClick={(ev) => {
        ev.stopPropagation();
        toggleSidebar();
      }}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default CloseSidebarButton;

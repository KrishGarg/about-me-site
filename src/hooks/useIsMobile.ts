import { useMedia } from "react-use";

const useIsMobile = () => useMedia("(max-width: 768px)");

export default useIsMobile;

import { useMedia } from "react-use";

export const CHECK_IF_MOBILE_QUERY = "(max-width: 768px)";

const useIsMobile = () => useMedia(CHECK_IF_MOBILE_QUERY, false);

export default useIsMobile;

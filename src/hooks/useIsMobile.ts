import { useMediaQuery } from "@mui/material";

const useIsMobile = () => useMediaQuery("(max-width: 768px)");

export default useIsMobile;

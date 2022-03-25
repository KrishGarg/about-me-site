import { FC } from "react";
import { useRecoilState } from "recoil";
import { loading as loadingState } from "@/lib/state";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import Logo from "./Logo";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: grey["A400"],
    "&:hover": {
      backgroundColor: alpha(grey["A400"], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: grey["A400"],
  },
}));

const Navbar: FC = () => {
  const [loading, setLoading] = useRecoilState(loadingState);

  return (
    <div className="w-screen flex justify-between items-center mb-4 bg-gradient-to-b from-soft-black-200 to-soft-black-300">
      <Logo />
      <FormControlLabel
        control={<CustomSwitch defaultChecked={loading} />}
        label="Loading Screen"
        onChange={(e) => setLoading((l) => !l)}
      />
    </div>
  );
};

export default Navbar;

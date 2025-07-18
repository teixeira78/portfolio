import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import { COLOR_PALETTE } from "../../../utils/constants";

const StyledTab = styled(Tab)(({ theme }) => ({
  justifyContent: "flex-start",
  minHeight: "40px",
  borderRadius: "8px",
  fontWeight: 500,
  color: "#000",
  transition: "all 0.2s ease-in",

  "&.Mui-selected": {
    backgroundColor: `${COLOR_PALETTE.primary["600"]}`,
    color: `${COLOR_PALETTE.primary["0"]}`,
    pointerEvents: "none",
    cursor: "default",
  },

  "&:hover": {
    backgroundColor: `${COLOR_PALETTE.primary[50]}`,
    color: `${COLOR_PALETTE.primary[900]}`,
  },
}));

function a11yProps(index) {
  return {
    id: `dashboard-tab-${index}`,
    "aria-controls": `dashboard-tabpanel-${index}`,
  };
}

const CustomTab = ({ iconPosition = "start", index, ...props }) => {
  return (
    <StyledTab {...a11yProps(index)} iconPosition={iconPosition} {...props} />
  );
};

export default CustomTab;

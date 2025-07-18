import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import FitbitIcon from "@mui/icons-material/Fitbit";
import CustomTab from "../ui/customTab/CustomTab";
import TABS_CONFIG from "../dashboard/TabsConfig";

function SideTabs({ value, onChange }) {
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "4px",
          fontSize: "28px",
          fontFamily: "cursive",
          fontWeight: "700",
        }}
        marginBottom={3}
      >
        <FitbitIcon fontSize="inherit" />
        TrackUs
      </Typography>
      <Tabs
        slotProps={{
          indicator: {
            sx: {
              display: "none",
            },
          },
        }}
        sx={{
          ".MuiTabs-list": {
            gap: "12px ",
          },
        }}
        value={value}
        onChange={onChange}
        orientation="vertical"
      >
        {TABS_CONFIG.map((config, index) => (
          <CustomTab
            key={`${config.label}--${index}`}
            label={config.label}
            index={index}
            icon={config.icon}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default SideTabs;

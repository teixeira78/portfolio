import Container from "@mui/material/Container";
import Navbar from "../navbar/Navbar";
import Grid from "@mui/material/Grid";
import SideTabs from "../sideTabs/SideTabs";
import { useState } from "react";
import Box from "@mui/material/Box";
import CustomTabPanel from "../ui/customTabPanel/CustomTabPanel";
import TABS_CONFIG from "./TabsConfig";

function Dashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      p="30px 20px"
      borderRadius={2}
      minHeight="95vh"
      gap={1}
      sx={{
        backgroundColor: "#ffff",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Grid width="240px">
        <SideTabs value={value} onChange={handleChange} />
      </Grid>
      <Grid
        sx={{
          flexGrow: 1,
          border: "1px solid #eeee",
        }}
        p={2}
        borderRadius={2}
      >
        <Navbar />
        <Box>
          {TABS_CONFIG.map((config, index) => (
            <CustomTabPanel value={value} index={index}>
              {config.content}
            </CustomTabPanel>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;

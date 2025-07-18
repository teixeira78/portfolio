import Overview from "../../features/overview/Overview";
import UserManagement from "../../features/userManagement/UserManagement";
import ProductsManagement from "../../features/productsManagement/ProductsManagement";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const TABS_CONFIG = [
  {
    label: "Overview",
    icon: <DashboardOutlinedIcon />,
    content: <Overview />,
  },
  {
    label: "Overview",
    icon: <AccountCircleOutlinedIcon />,
    content: <UserManagement />,
  },
  {
    label: "Products",
    icon: <Inventory2OutlinedIcon />,
    content: <ProductsManagement />,
  },
];

export default TABS_CONFIG;

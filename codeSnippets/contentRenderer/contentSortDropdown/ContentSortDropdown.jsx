import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import classes from "./contentSortDropdown.module.scss";
import { ArrowDropDown as ArrowDownIcon } from "@mui/icons-material";
import { SORT_DIRECTION } from "../../../utils/contants";

export default function ContentSortDropdown({ onSort }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (direction) => {
    onSort(direction);
    handleClose();
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={classes["dropdown-btn"]}
        endIcon={<ArrowDownIcon />}
      >
        Relevância
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleMenuItemClick(SORT_DIRECTION.DESC)}>
          Mais recentes primeiro
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(SORT_DIRECTION.ASC)}>
          Mais antigos primeiro
        </MenuItem>
      </Menu>
    </div>
  );
}

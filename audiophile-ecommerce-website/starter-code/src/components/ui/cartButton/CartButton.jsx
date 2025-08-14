import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CartButton({ className, ...props }) {
  return (
    <IconButton className={className} {...props}>
      <ShoppingCartOutlinedIcon style={{ color: "var(--pure-white)" }} />
    </IconButton>
  );
}

export default CartButton;

import classes from "./AppButton.module.scss";

function AppButton({ children, className, ...props }) {
  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default AppButton;

import classes from "./Container.module.scss";

function Container({ children, className, ...props }) {
  return (
    <div className={`${classes.container} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;

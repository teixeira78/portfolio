import classes from "./AppLogo.module.scss";
import Logo from "../../../assets/shared/desktop/logo.svg";

function AppLogo({ className }) {
  return (
    <div className={`${classes["logo-container"]} ${className}`}>
      <img src={Logo} alt="Audiophile Logo" />
    </div>
  );
}

export default AppLogo;

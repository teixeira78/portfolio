import { SOCIAL_LINKS } from "../../../utils/constants";
import AppNavLink from "../appNavLink/AppNavLink";
import UList from "../uList/UList";
import classes from "./SocialsLinks.module.scss";

function SocialsLinks({ className }) {
  return (
    <UList
      className={`${classes["social-links"]} ${className}`}
      items={SOCIAL_LINKS}
      renderItem={(socialLink, index) => (
        <AppNavLink
          className={classes["social-link"]}
          key={index}
          to={socialLink.url}
        >
          {<socialLink.Icon />}
        </AppNavLink>
      )}
    />
  );
}

export default SocialsLinks;

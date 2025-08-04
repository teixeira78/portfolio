import AppNavLink from "../appNavLink/AppNavLink";
import UList from "../uList/UList";
import classes from "./NavLinks.module.scss";

function NavLinks({ className }) {
  const linkConfig = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Headphones",
      path: "/headphones",
    },
    {
      label: "Speakers",
      path: "/speakers",
    },
    {
      label: "Earphones",
      path: "/earphones",
    },
  ];

  return (
    <UList
      className={`${classes["nav-links"]} ${className}`}
      items={linkConfig}
      renderItem={(config) => (
        <AppNavLink key={config.path} to={config.path}>
          {config.label}
        </AppNavLink>
      )}
    />
  );
}

export default NavLinks;

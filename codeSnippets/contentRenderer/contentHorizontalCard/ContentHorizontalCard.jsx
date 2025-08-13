import { NavLink } from "react-router-dom";
import classes from "./contentHorizontalCard.module.scss";
import { formatDate } from "../../../utils/handlerUtils";

function ContentHorizontalCard({ data, className, includeSubtitle = true }) {
  return (
    <NavLink
      to={`../${data?.slug}`}
      className={`${classes["horizontal-card"]} ${className}`}
    >
      <div className={classes["horizontal-card-img--container"]}>
        <img
          src={`${process.env.REACT_APP_DOMAIN_URL + data?.coverImagePath}`}
          alt={`Imagem`}
          className={classes["horizontal-card--img"]}
        />
      </div>
      <div className={classes["horizontal-card-content--container"]}>
        <h3 className={classes["horizontal-card--title"]}>{data?.title}</h3>
        {includeSubtitle && (
          <p className={classes.description}>{data?.subTitle}</p>
        )}
        <span className={classes["horizontal-card--date"]}>
          {formatDate(data?.createdAt)}
        </span>
      </div>
    </NavLink>
  );
}

export default ContentHorizontalCard;

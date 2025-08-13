import classes from "./contentCard.module.scss";
import { NavLink } from "react-router-dom";
import { formatDate } from "../../../utils/handlerUtils";
import Badge from "../../ui/badge/badge";
import { useMemo } from "react";

function ContentCard({ data }) {
  const formattedDate = formatDate(data.createdAt, "pt-PT", {
    day: "2-digit",
    month: "long",
    year: "2-digit",
  });

  // Get cover image path from the images array
  const coverImagePath = useMemo(
    () => data?.images.find((img) => img.isCoverImage === true)?.imagePath,
    [data?.images]
  );

  return (
    <div className={classes.card}>
      <div className={classes["card-img-container"]}>
        <img
          src={`${process.env.REACT_APP_API_DOMAIN_URL}${coverImagePath}`}
          alt={`Imagem relacionada ao conteúdo`}
        />
      </div>
      <div className={classes["card-bottom"]}>
        <div className={classes["content-info"]}>
          <span className={classes["content-date"]}>{formattedDate}</span>
          <Badge className={classes["content-category"]}>
            {data.contentCategory.description}
          </Badge>
        </div>
        <h3 className={classes["content-title"]}>{data.title}</h3>
        <p className={classes["content-description"]}>{data.subTitle}</p>

        {data.author && (
          <div className={classes["content-author"]}>
            <div className={classes["author-avatar-container"]}>
              <img src={data.author.avatar} alt="Avatar" />
            </div>
            <span className={classes["author-name"]}>{data.author.name}</span>
          </div>
        )}
        <div className={classes["card-link-container"]}>
          <NavLink to={`${data.slug}`} className={classes["card-link"]}>
            Ler mais
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;

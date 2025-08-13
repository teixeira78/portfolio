import classes from "./contentNavigation.module.scss";
import ContentHorizontalCard from "../contentHorizontalCard/contentHorizontalCard";
import { NavLink } from "react-router-dom";
import SkeletonCard from "../../ui/skeletonCard/skeletonCard";

function ContentNavigation({ previousContent, nextContent, isLoading }) {
  return (
    <div className={classes["content-navigation-container"]}>
      <div className={classes["prev-content"]}>
        {isLoading && (
          <SkeletonCard
            imgClassName={classes["skeleton-img"]}
            titleClassName={classes["skeleton-title"]}
            descriptionClassName={classes["skeleton-description"]}
            dateClassName={classes["skeleton-date"]}
          />
        )}

        {!isLoading && previousContent && (
          <>
            <NavLink to={`../${previousContent.id}`}>
              <span> Previous Article</span>
            </NavLink>
            <ContentHorizontalCard
              data={previousContent}
              className={classes["horizontal-card"]}
            />
          </>
        )}
      </div>

      <div className={classes["next-content"]}>
        {isLoading && (
          <SkeletonCard
            imgClassName={classes["skeleton-img"]}
            titleClassName={classes["skeleton-title"]}
            descriptionClassName={classes["skeleton-description"]}
            dateClassName={classes["skeleton-date"]}
          />
        )}
        {!isLoading && nextContent && (
          <>
            <NavLink
              className={classes["next-link"]}
              to={`../${nextContent.id}`}
            >
              <span>Next Article</span>
            </NavLink>
            <ContentHorizontalCard
              data={nextContent}
              className={classes["horizontal-card"]}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ContentNavigation;

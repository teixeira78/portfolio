import Badge from "../../ui/badge/badge";
import { useMemo } from "react";
import ContentHorizontalCard from "../contentHorizontalCard/contentHorizontalCard";
import CategoryButton from "../../ui/categoryButton/categoryButton";
import SideTabContainer from "../../ui/sideTabContainer/sideTabContainer";
import classes from "./contentSideTab.module.scss";
import {
  EMPTY_ARRAY_LENGTH,
  SIDE_SKELETON_LENGTH,
} from "../../../utils/contants";
import { shuffleArray } from "../../../utils/handlerUtils";
import SkeletonCard from "../../ui/skeletonCard/skeletonCard";
import CategoryButtonSkeleton from "../../ui/categoryButtonSkeleton/categoryButtonSkeleton";

function ContentSideTab({
  tags = [],
  relatedContentData = {},
  categories = [],
  currentContentId,
  isCategoriesLoading,
}) {
  const {
    contents: relatedContents,
    isLoading,
    handleCategoryClick,
  } = relatedContentData;

  // Get 4 random articled from the related contents
  const randomRelatedContents = useMemo(() => {
    return relatedContents
      ? shuffleArray(
          relatedContents.filter((content) => content.id !== currentContentId)
        ).slice(0, 4)
      : [];
  }, [relatedContents, currentContentId]);

  return (
    <SideTabContainer className={classes["tab-container"]}>
      {tags.length > EMPTY_ARRAY_LENGTH && (
        <>
          <div className={classes["tags-container"]}>
            <h3>Tags</h3>
            <div className={classes["side-tab-tags"]}>
              {tags.map((tag, index) => (
                <Badge key={index}>{tag.name}</Badge>
              ))}
            </div>
          </div>
          <div className={classes.separator}></div>
        </>
      )}

      <>
        <div className={classes["related-content--container"]}>
          <h3>Related Content</h3>
          <div
            className={`${classes["side-tab-cards"]}  ${classes["flex-box-col"]}`}
          >
            {isLoading &&
              SIDE_SKELETON_LENGTH.map((skeleton, index) => (
                <SkeletonCard
                  key={index}
                  className={classes["skeleton-card"]}
                />
              ))}

            {!isLoading &&
              randomRelatedContents.length > EMPTY_ARRAY_LENGTH &&
              randomRelatedContents.map((content, index) => (
                <ContentHorizontalCard
                  key={content?.id}
                  data={content}
                  className={classes["horizontal-card"]}
                  includeSubtitle={false}
                />
              ))}
          </div>
        </div>
        <div className={classes.separator}></div>
      </>

      <div
        className={`${classes["categories-container"]} ${classes["flex-box-col"]}`}
      >
        <h3>Categories</h3>

        <div
          className={`${classes["side-tab-ctg-btns"]} ${classes["flex-box-col"]}`}
        >
          {isCategoriesLoading &&
            sideSkeletonLength.map((skeleton, index) => (
              <CategoryButtonSkeleton key={index} />
            ))}

          {!isCategoriesLoading &&
            categories.length > EMPTY_ARRAY_LENGTH &&
            categories.map((category, index) => (
              <CategoryButton
                key={index}
                category={category}
                onCategoryClick={handleCategoryClick}
              />
            ))}
        </div>
      </div>
    </SideTabContainer>
  );
}

export default ContentSideTab;

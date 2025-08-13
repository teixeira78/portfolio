import React, { useEffect, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import LoadingSpinner from "../../ui/loadingSpinner/loadingSpinner";
import SectionContainer from "../../ui/sectionContainer/sectionContainer";
import ContentSideTab from "../contentSideTab/contentSideTab";
import ContentNavigation from "../contentNavigation/contentNavigation";
import classes from "./contentView.module.scss";
import Badge from "../../ui/badge/badge";
import {
  formatDate,
  calculateReadTime,
  getContentState,
  updateImgSrc,
} from "../../../utils/handlerUtils";
import { PAGE_NOT_FOUND_CODE, SINGLE_MINUTE } from "../../../utils/contants";
import useContentView from "../../../hooks/useContentView";
import AppErrorMessage from "../../ui/error/appErrorMessage/appErrorMessage";

function ContentView() {
  const { slug } = useParams();

  // Fetch all content data using custom hook
  const {
    primaryContent: {
      currentContent,
      nextContent,
      previousContent,
      isLoading: isPrimaryContentLoading,
      isError,
      error,
    },
    relatedContentData,
    lovs: { isLovsLoading },
  } = useContentView(slug);

  const id = currentContent?.id;

  // Update the image src attribute with the application url
  useEffect(() => {
    if (Boolean(currentContent)) {
      // see folder utils
      updateImgSrc("#content-container");
    }
  }, [currentContent]);

  // Define what to render based on loading/success states
  const contentMap = {
    loading: <LoadingSpinner />,
    success: (
      // Render HTML content directly from API
      <div dangerouslySetInnerHTML={{ __html: currentContent?.contentBody }} />
    ),
  };

  // Determine current state and select appropriate content to render
  const contentState = getContentState(isPrimaryContentLoading);
  const content = contentMap[contentState];

  // Calculate estimated reading time for the article
  // Memoized to avoid recalculation on every rende
  const contentReadTime = useMemo(() => {
    return currentContent?.contentBody
      ? calculateReadTime(currentContent.contentBody)
      : null;
  }, [currentContent]);

  return (
    <SectionContainer>
      {isError && error.status !== PAGE_NOT_FOUND_CODE ? (
        <AppErrorMessage />
      ) : (
        <>
          <div className={classes["content-view-container"]}>
            <div className={classes.container}>
              <div className={classes["content-container"]}>
                <NavLink to={`..`} className={classes["back-link"]}>
                  <span>Voltar</span>
                </NavLink>
                <div className={classes["badge-container"]}>
                  {currentContent?.contentCategory && (
                    <Badge>{currentContent.contentCategory.description}</Badge>
                  )}
                </div>
                <div className={classes["content-metadata"]}>
                  {currentContent && currentContent?.createdAt && (
                    <span>{formatDate(currentContent.createdAt)}</span>
                  )}
                  {contentReadTime && (
                    <span>
                      {contentReadTime}{" "}
                      {`${contentReadTime > SINGLE_MINUTE ? "Mins" : "Min"}`}{" "}
                      Read
                    </span>
                  )}
                </div>
                <div id="content-container">{content}</div>
              </div>
              <ContentNavigation
                previousContent={previousContent}
                nextContent={nextContent}
                isLoading={isPrimaryContentLoading}
                isLovsLoading={isLovsLoading}
              />
            </div>
            <ContentSideTab
              tags={currentContent?.tags}
              relatedContentData={relatedContentData}
              categories={categories}
              currentContentId={id}
              isCategoriesLoading={isLovsLoading}
            />
          </div>
        </>
      )}
    </SectionContainer>
  );
}

export default ContentView;

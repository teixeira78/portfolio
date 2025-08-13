import ContentGrid from "../contentGrid/contentGrid";
import SectionContainer from "../../ui/sectionContainer/sectionContainer";
import classes from "./contentLoader.module.scss";
import Pagination from "../../ui/pagination/pagination";
import LoadingSpinner from "../../ui/loadingSpinner/loadingSpinner";
import useContent from "../../../hooks/useContent";
import SearchBar from "../../ui/searchBar/searchBar";
import {
  EMPTY_ARRAY_LENGTH,
  FIRST_PAGE,
  PAGE_NOT_FOUND_CODE,
} from "../../../utils/contants";
import { handleCategoryClick, handleSortContent } from "../utils/handlerUtils";
import NoResults from "../../ui/noResults/noResults";
import { getContentState } from "../../../utils/handlerUtils";
import { useGetLovTypeAnswersQuery } from "../../../store/nantoiApiConfig";
import ContentFilterBar from "../contentFilterBar/contentFilterBar";
import AppErrorMessage from "../../ui/error/appErrorMessage/appErrorMessage";
import { useMemo } from "react";

function ContentLoader({ title, subtitle, contentType }) {
  const { data: lovsData } = useGetLovTypeAnswersQuery(
    {
      lovType: "CONTENT_TYPE",
    },
    { skip: !contentType }
  );

  const {
    contents,
    isError,
    searchBarProps,
    error,
    isLoading,
    currentCategory,
    paginationProps,
  } = useContent({ contentType });

  // Extract category according to the contentType passed as a prop
  const categories = useMemo(() => {
    return (
      lovsData?.lovAnswerValues
        .find((lov) => lov.code === contentType)
        .lovAnswerValueRefParent.map((answer) => answer.description) || []
    );
  }, [lovsData?.lovAnswerValues, contentType]);

  // Define what to render based on loading, success and error states
  const contentMap = {
    loading: <LoadingSpinner />,
    empty: <NoResults className={classes["no-result"]} />,
    success: <ContentGrid dataArr={contents} />,
  };

  // Determine current state and select appropriate content to render
  const contentState = getContentState(isLoading, contents);
  const content = contentMap[contentState];

  return (
    <SectionContainer>
      {isError && error.status !== PAGE_NOT_FOUND_CODE ? (
        <AppErrorMessage />
      ) : (
        <>
          <header className={classes.header}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </header>
          <SearchBar props={searchBarProps} placeholder="Pesquisar ..." />

          <ContentFilterBar
            categories={categories}
            onCategoryClick={handleCategoryClick}
            activeCategory={currentCategory}
            onSortContent={handleSortContent}
          />

          <div className={classes.content}>{content}</div>

          {paginationProps.totalPages > FIRST_PAGE && (
            <Pagination className={classes.pagination} {...paginationProps} />
          )}
        </>
      )}
    </SectionContainer>
  );
}

export default ContentLoader;

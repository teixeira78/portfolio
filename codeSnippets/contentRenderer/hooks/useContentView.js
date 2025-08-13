import { useGetContentBySlugQuery } from "../store/nantoiApiConfig";
import { useGetLovTypeAnswersQuery } from "../store/nantoiApiConfig";
import { RELATED_CONTENT_SIZE } from "../utils/contants";
import useContent from "./useContent";

const useContentView = (slug) => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetContentBySlugQuery(slug);

  const contentType = data?.currentContent?.contentType;
  const contentCategory = data?.content?.contentCategory;

  const relatedContentParams = {
    contentCategory,
    contentType,
    size: RELATED_CONTENT_SIZE,
    excludeBody: true,
  };

  // Fetch related content using the specific related content params
  const relatedContentData = useContent(relatedContentParams);

  const {
    data: lovsData,
    isLoading: isLovsLoading,
    error: lovsError,
    isError: isLovsError,
  } = useGetLovTypeAnswersQuery(
    {
      lovType: "CONTENT_TYPE",
    },
    { skip: !contentType }
  );

  const categories = useMemo(() => {
    // extract categories from the api response
    return lovsData?.lovAnswerValues[0].lovAnswerValueRefParent.map(
      (answer) => answer.description
    );
  }, [lovsData]);

  return {
    primaryContent: {
      currentContent: data?.currentContent,
      nextContent: data?.nextContent,
      previousContent: data?.previousContent,
      data,
      isLoading,
      isSuccess,
      isError,
      error,
    },
    relatedContentData,
    lovs: {
      lovsData,
      isLovsLoading,
      lovsError,
      isLovsError,
    },
  };
};

export default useContentView;

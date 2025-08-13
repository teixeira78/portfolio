import { useGetContentsQuery } from "../store/nantoiApiConfig";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  DEFAULT_CONTENT_PAGE_SIZE,
  DEFAULT_SORT,
  SORT_DIRECTION_MAP,
  DEFAULT_ORDER_COLUMN,
  FIRST_PAGE,
} from "../utils/contants";

const useContent = (options = {}) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract current state from URL parameters with fallback defaults
  const currentPage = Number(searchParams.get("page")) || FIRST_PAGE.toString();
  const currentCategory = searchParams.get("category") || "";
  const searchTerm = searchParams.get("search") || "";
  const orderDirection = searchParams.get("sort") || DEFAULT_SORT;

  // Fetch content data using RTK Query hook
  // This handles caching, loading states, and automatic refetching
  const { data, isLoading, isError, error, isSuccess } = useGetContentsQuery({
    page: currentPage,
    size: options.size || DEFAULT_CONTENT_PAGE_SIZE,
    contentType: options.contentType,
    orderColumn: DEFAULT_ORDER_COLUMN,
    excludeBody: false || options.excludeBody,
    direction: orderDirection,
    // Conditionally add search parameter only if search term exists
    ...(searchTerm ? { search: searchTerm } : {}),
    // Conditionally add category filter - prioritize options over URL params
    ...(options.contentCategory || currentCategory
      ? {
          contentCategory: options.contentCategory || currentCategory,
        }
      : {}),
  });

  const paginationProps = {
    totalPages: data?.totalPages,
    pageSize: data?.pageSize,
    currentPage,
  };

  return {
    contents: data?.contents,
    isLoading,
    isSuccess,
    isError,
    errorMsg: error?.messages || data?.errorMessages,
    error: error,
    paginationProps,
    searchTerm,
    currentCategory,
  };
};

export default useContent;

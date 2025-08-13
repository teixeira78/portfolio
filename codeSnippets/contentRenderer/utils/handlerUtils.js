import {
  DEFAULT_CONTENT_PAGE_SIZE,
  DEFAULT_SORT,
  SORT_DIRECTION_MAP,
  DEFAULT_ORDER_COLUMN,
  FIRST_PAGE,
  SHOW_ALL_OPTIONS_ARR,
} from "../utils/contants";

/**
 * Updates the Image src attribute before being loaded onto the DOM
 * Prepends the domain URL to relative image paths for proper loading
 * @param {string} containerSelector - CSS selector for the container of the images
 * @returns {void}
 */

export const updateImgSrc = (containerSelector) => {
  // Find the container element using the provided CSS selector
  const container = document.querySelector(containerSelector);

  // Early return if container doesn't exist - prevents errors
  if (!container) return;

  // Get all image elements within the container
  const images = container.querySelectorAll("img");

  images.forEach((img) => {
    img.src = process.env.REACT_APP_DOMAIN_URL + img.getAttribute("src");
  });
};

/**
 * Handles category filter selection*
 * @param {string} category - Selected category name
 * @param {Boolean} shouldNavigateUp - Whether to navigate up one route level
 */
export const handleCategoryClick = (category, shouldNavigateUp = false) => {
  shouldNavigateUp && navigate("..");

  // Handle "show all" cases
  if (SHOW_ALL_OPTIONS_ARR.includes(category.toLowerCase())) {
    // Clear category filter, reset to first page
    setSearchParams({
      page: FIRST_PAGE.toString(),
    });
  } else {
    // Set new category filter and reset pagination
    setSearchParams({
      category,
      page: FIRST_PAGE.toString(),
    });
  }
};

/**
 * Updates sort order in URL parameters
 * @param {string} direction - Sort direction (e.g., 'asc', 'desc')
 */
export const handleSortContent = (direction) => {
  // Convert readable direction to API format using mapping
  const sortParam = SORT_DIRECTION_MAP[direction.toLowerCase()];

  // Preserve existing URL parameters while updating sort
  setSearchParams((prev) => ({
    ...Object.fromEntries(prev),
    sort: sortParam,
  }));
};

/**
 * Handles pagination navigation
 * @param {number} page - Page number to navigate to
 */
export const handlePageChange = (page) => {
  // Preserve existing filters while changing page
  setSearchParams((prev) => ({
    ...Object.fromEntries(prev),
    page: page.toString(),
  }));
};

/**
 * Handles search input submission
 * @param {string} searchTerm - User's search query
 */
export const handleSearch = (searchTerm) => {
  // Reset to first page when searching - new results start from beginning
  setSearchParams({
    search: searchTerm,
    page: FIRST_PAGE.toString(),
  });
};

/**
 * Determines the current content state based on loading, error states and data presence
 * @param {boolean} isLoading - Whether content is currently loading
 * @param {Array} arr - The data array to check for emptiness
 * @returns {string} Current state: "loading", "error", "empty" or "success"
 */
export const getContentState = (isLoading, arr) => {
  if (isLoading) return "loading";
  if (arr && arr?.length === EMPTY_ARRAY_LENGTH) return "empty";
  return "success";
};

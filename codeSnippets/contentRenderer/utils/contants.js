export const USER_ACTIONS = {
  LOGIN: "login",
  REGISTER: "register",
  VERIFY_EMAIL: "verifyEmail",
  REQUEST_PASSWORD_RESET: "requestPasswordReset",
  UPDATE_PASSWORD: "updatePassword",
};

export const CONTENT_TYPES = {
  NEWS: "CONTENT_NEW",
  BLOG: "BLOG",
};

export const POLICY_TYPE = {
  TERMS_CONDITIONS: "terms",
  PRIVACY: "privacy",
  COOKIES: "cookies",
  CONTACT_US: "contact-us",
};

export const SHOW_ALL_OPTIONS_ARR = ["todos", "all", ""];

export const PROCESS_TYPE = {
  COMPLAINT: "complaint-process",
  SHIPPING: "shipping-process",
  RETURN: "return-process",
  CONTACT_US: "contact-us",
};

export const EMPTY_ARRAY_LENGTH = 0;
export const SINGLE_MINUTE = 1;
export const RELATED_CONTENT_SIZE = 50;
export const DEFAULT_CONTENT_PAGE_SIZE = 9;
export const FIRST_PAGE = 1;
export const PAGE_STEP = 1;
export const SORT_DIRECTION = {
  ASC: "ASC",
  DESC: "DESC",
};

export const CONTENT_TYPE = {
  NEWS: "NEWS",
};

export const SORT_DIRECTION_MAP = {
  "mais recentes primeiro": "DESC",
  "mais antigos primeiro": "ASC",
  "newest first": "DESC",
  "oldest first": "ASC",
};

export const DEFAULT_SORT = "DESC";

export const DEFAULT_ORDER_COLUMN = "createdAt";

export const PAGE_NOT_FOUND_CODE = 404;

export const PASSWORD_FIELDNAMES_ARR = [
  "password",
  "repeatedPassword",
  "currentPassword",
];

export const USER_STATUS = {
  NEW: "NEW",
  ACTIVE: "ACTIVE",
};

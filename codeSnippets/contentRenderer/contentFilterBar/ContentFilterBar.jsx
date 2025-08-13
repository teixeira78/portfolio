import classes from "./contentFilterBar.module.scss";
import FilterDropdown from "../filterDropdown/filterDropdown";
import { SORT_DIRECTION_MAP, RELEVANTE_OPTIONS } from "../../../utils/contants";

function ContentFilterBar({
  categoryOptions,
  activeCategory,
  onCategoryClick,
  onSortContent,
}) {
  return (
    <div className={classes["filter-bar-container"]}>
      <div className={classes.categories}>
        <button
          onClick={() => onCategoryClick("")}
          className={classes["btn-style"]}
          data-active={activeCategory === ""}
        >
          Todas
        </button>
        {categories &&
          categories.map((category, index) => (
            <button
              key={index}
              onClick={() => onCategoryClick(category)}
              className={classes["btn-style"]}
              data-active={activeCategory === category}
            >
              {category}
            </button>
          ))}
      </div>

      <FilterDropdown
        className={classes["categories-dropdown"]}
        options={categoryOptions}
        onClick={onCategoryClick}
        label="Categorias"
        paramName="category"
      />

      <FilterDropdown
        onClick={onSortContent}
        options={RELEVANTE_OPTIONS}
        label="Relevância"
        paramName="sort"
        valueMap={SORT_DIRECTION_MAP}
      />
    </div>
  );
}

export default ContentFilterBar;

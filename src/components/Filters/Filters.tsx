import Equipment from "../Equipment/Equipment";
import Type from "../Type/Type";
import css from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={css.filtersContainer}>
      <p className={css.filters}>Filters</p>
      <Equipment />
      <Type />
      <button type="submit" className={css.submitBtn}>
        Search
      </button>
    </div>
  );
}

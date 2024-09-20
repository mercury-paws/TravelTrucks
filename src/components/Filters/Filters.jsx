import Equipment from "../Equipment/Equipment";
import Type from "../Type/Type";
import css from "./Filters.module.css";

export default function Filters() {
  return (
    <>
      <p>These are Filters</p>
      <Equipment />
      <Type />
      <button type="submit" className={css.submitBtn}>
        Search
      </button>
    </>
  );
}

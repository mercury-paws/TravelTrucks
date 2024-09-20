import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <>
      <Location />
      <Filters />
    </>
  );
}

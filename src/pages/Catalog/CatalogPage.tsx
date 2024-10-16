import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import TruckList from "../../components/TruckList/TruckList";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.catalogContainer}>
      <div className={css.catalogLocation}>
        <Location />
      </div>
      <div className={css.catalogFilters}>
        <Filters />
      </div>
      <div className={css.catalogTruckList}>
        <TruckList />
      </div>
    </div>
  );
}

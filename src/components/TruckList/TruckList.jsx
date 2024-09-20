import TruckItem from "../TruckItem/TruckItem";
import css from "./TruckList.module.css";

export default function TruckList() {
  return (
    <>
      <p>This is TruckList</p>
      <ul>
        <li>
          <TruckItem />{" "}
        </li>
      </ul>
      <button type="button">Load More</button>
    </>
  );
}

import css from "./TruckItem.module.css";
import { NavLink } from "react-router-dom";

export default function TruckItem() {
  return (
    <>
      <p>This is TruckItem</p>
      <p>img</p>
      <div>
        <div>
          <p>TruckName</p>
          <p>TruckPrice</p>
          <p>HeartSVG</p>
        </div>
        <div>
          <p>TruckReviews</p>
          <p>Location</p>
        </div>
        <p>TruckMotto</p>
        <ul>
          <li>TruckPluces</li>
        </ul>
        <NavLink to="/truckID">Show More</NavLink>
      </div>
    </>
  );
}

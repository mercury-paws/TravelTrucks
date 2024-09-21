import { Link, Outlet } from "react-router-dom";
import css from "./TruckInfo.module.css";
import BookTruck from "../BookTruck/BookTruck";

export default function TruckInfo() {
  return (
    <>
      <p>This is TruckInfo</p>
      <div>
        <p>TruckName</p>
        <div>
          <p>TruckReviews</p>
          <p>Location</p>
        </div>
        <p>TruckPrice</p>
      </div>
      <ul>
        <li>
          <p>TruckImages</p>
        </li>
      </ul>
      <p>General info about truck</p>
      <h2>Options</h2>
      <div>
        <Link to="/features">Features</Link>
        <Link to="/reviews">Reviews</Link>
        <Outlet />
        <BookTruck />
      </div>
    </>
  );
}

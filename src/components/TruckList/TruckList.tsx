import TruckItem from "../TruckItem/TruckItem";
import css from "./TruckList.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../redux/operations";

export default function TruckList() {
  const [trucks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrucks() {
      const data = await getData();
      setTracks(data.items);
      console.log(data.items);
    }
    getTrucks();
  }, []);

  return (
    <>
      <ul>
        {trucks.map((truck) => {
          return (
            <li key={truck.id}>
              <TruckItem data={truck} />{" "}
            </li>
          );
        })}
      </ul>
      <button type="button">Load More</button>
    </>
  );
}

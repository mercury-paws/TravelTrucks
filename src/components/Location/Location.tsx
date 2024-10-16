import css from "./Location.module.css";
import Map from "../Map/Map";
import { useState } from "react";

type Props = {
  name: string;
  country: string;
};

export default function Location() {
  const [showMap, setShowMap] = useState(false);
  const [inputValue, setInputValue] = useState<Props>({
    name: "Town",
    country: "Country",
  });
  const [position, setPosition] = useState<[number, number] | null>(null);

  const handleLocationSelect = (name: string, country: string) => {
    setInputValue({ name: name, country: country });
    setShowMap(false);
  };
  const handleInputClick = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <p className={css.location}>Location</p>
      <input
        type="text"
        readOnly
        value={`${inputValue.name}, ${inputValue.country}`}
        placeholder="Select your town and country"
        className={css.mapInput}
        onClick={handleInputClick}
      ></input>
      {showMap && (
        <Map
          onSelectLocation={handleLocationSelect}
          setPosition={setPosition}
          initialPosition={position}
        />
      )}
    </>
  );
}

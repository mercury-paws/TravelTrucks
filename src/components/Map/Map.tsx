import css from "./Map.module.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import axios from "axios";
import { LatLngExpression } from "leaflet";

type Props = {
  onSelectLocation: (name: string, country: string) => void;
  setPosition: (position: [number, number]) => void;
  initialPosition: [number, number] | null;
};

function Map({ onSelectLocation, setPosition, initialPosition }: Props) {
  function LocationMarker() {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);

        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          );

          let town =
            response.data.address.town ||
            response.data.address.city ||
            "Unknown Town";
          const country = response.data.address.country || "Unknown Country";
          onSelectLocation(town, country);
        } catch (error) {
          console.log(error);
          onSelectLocation("Unknown town", "Unknown country");
        }
      },
    });

    return initialPosition === null ? null : (
      <Marker position={initialPosition} />
    );
  }
  return (
    <MapContainer
      center={initialPosition ? initialPosition : [50.505, 30.59]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Include LocationMarker as a child of MapContainer */}
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;

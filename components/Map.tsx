"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
  iconUrl: markerIcon.src ?? markerIcon,
  shadowUrl: markerShadow.src ?? markerShadow,
});

export default function Map() {
  return (
    <MapContainer
      center={[9.021577883128932, 38.83894301589531]}
      zoom={13}
      style={{ height: "400px", width: "100%", zIndex: 0 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[9.022050876806727, 38.83851148860736]}>
        <Popup>Rapha Physiotherapy</Popup>
      </Marker>
    </MapContainer>
  );
}

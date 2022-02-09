import React from 'react';
import { LatLngTuple } from "leaflet"
import { MapContainer } from 'react-leaflet'
import './App.css';
import HeatedMaps from './HeatedMaps';


const center: LatLngTuple = [60.17870038288135, 24.9444580078125]

function App() {
  return (
    <>
      {/* Main Map Container */}
      <MapContainer center={center} className="leafletmap" zoom={12} scrollWheelZoom={false}>
        <HeatedMaps />
      </MapContainer>

    </>
  );
}

export default App;

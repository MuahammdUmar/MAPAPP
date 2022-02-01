import React from 'react';
import { LatLng, LatLngTuple } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import './App.css';
import LeafletMap from './LeafletMap';
import OverlappingMap from './OverlappingMap';


const center: LatLngTuple = [51.505, -0.09]

function App() {
  return (
    <>
    
      <MapContainer center={center} className="leafletmap" zoom={15} scrollWheelZoom={false}>
        <OverlappingMap />
      </MapContainer>

    </>
  );
}

export default App;

import React from 'react';
import { LatLng, LatLngTuple } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import './App.css';
import LeafletMap from './LeafletMap';
import OverlappingMap from './OverlappingMap';


const center: LatLngTuple = [60.2235299884319,24.94705001539827]

function App() {
  return (
    <>
    
      <MapContainer center={center} className="leafletmap" zoom={12} scrollWheelZoom={false}>
        <OverlappingMap />
      </MapContainer>

    </>
  );
}

export default App;

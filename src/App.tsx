import React from 'react';
import { LatLng } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import './App.css';
import LeafletMap from './LeafletMap';
import OverlappingMap from './OverlappingMap';

const center = [51.505, -0.09]

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
]

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

//const position = [51.505, -0.09]
const position = new LatLng(51.505, -0.09);
//const position:[number,number] = [51.505, -0.09];
const hollywoodStudiosPolygon = [
  [
    new LatLng(28.35390453844, -81.56443119049),
    new LatLng(28.35390453844, -81.55619144439 ),
    new LatLng( 28.35983376526, -81.55619144439 ),
    new LatLng( 28.35983376526, -81.56443119049 ),
    new LatLng( 28.35390453844, -81.56443119049 ),
  ]
];

// const hollywoodStudiosPolygon = [
//   [
//     [28.35390453844, -81.56443119049],
//     [28.35390453844, -81.55619144439],
//     [28.35983376526, -81.55619144439],
//     [28.35983376526, -81.56443119049],
//     [28.35390453844, -81.56443119049],
//   ]
// ];

const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }

function App() {
  return (
    <>
    {/* <MapContainer center={[51.505, -0.09]} className="leafletmap" zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Polygon color="blue" positions={hollywoodStudiosPolygon} />
    </MapContainer> */}
    {/* <LeafletMap /> */}
    <OverlappingMap />
    </>
  );
}

export default App;

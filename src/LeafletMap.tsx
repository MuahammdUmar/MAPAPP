import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Rectangle } from 'react-leaflet';
import { LatLngBounds, LatLngTuple,  } from 'leaflet';
import { LatLng } from "leaflet"


const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom: number = 8;

// const hollywoodStudiosPolygon = [
//     [
//       new LatLng(28.35390453844, -81.56443119049),
//       new LatLng(28.35390453844, -81.55619144439 ),
//       new LatLng( 28.35983376526, -81.55619144439 ),
//       new LatLng( 28.35983376526, -81.56443119049 ),
//       new LatLng( 28.35390453844, -81.56443119049 ),
//     ]
//   ];

const hollywoodStudiosPolygon: LatLngTuple[][] = [
  [
    [28.35390453844, -81.56443119049],
    [28.35390453844, -81.55619144439],
    [28.35983376526, -81.55619144439],
    [28.35983376526, -81.56443119049],
    [28.35390453844, -81.56443119049],
  ]
];

const multiPolygon: LatLngTuple[][] = [
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

const rectangle: LatLngTuple[] = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  const rectangleInner: LatLngTuple[] = [
    [51.0, -0.04],
    [50.1, -0.02],
  ]
//const rectangle: LatLngTuple = [51.49, -0.08]
    
  
const blackOptions = { color: 'black' }
const redOptions = { color: 'black' }

const LeafletMap: React.FC = () => {
    React.useEffect(() => {
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);
    
      return (
        <MapContainer center={[51.505, -0.09]} className="mapid" zoom={13} style={{ height: "50vh" }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Polygon color="blue" positions={multiPolygon} />
          <Rectangle bounds={rectangle} pathOptions={blackOptions} />
          <Rectangle bounds={rectangleInner} pathOptions={redOptions} />
        </MapContainer>
   
    )
}
export default LeafletMap
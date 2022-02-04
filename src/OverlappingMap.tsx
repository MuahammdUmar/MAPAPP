import React, { useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polygon, Rectangle, LayersControl, LayerGroup, FeatureGroup, Circle, useMap, useMapEvent, useMapEvents } from 'react-leaflet';
import { LatLngBounds, LatLngTuple, } from 'leaflet';



const OverlappingMap = () => {

    const map = useMap();
    const [fillColorMap, setFillColorMap] = useState('green')
    const [outerColorMap, setOuterColorMap] = useState('#0c53a4')
    const [innerColorMap, setInnerColorMap] = useState('#aa0021')

    const center: LatLngTuple = [51.505, -0.09]
    const rectangle: LatLngTuple[] = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    return (
        <>
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay name="Marker with popup">
                    <Marker position={center}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Layer group with circles">
                    <LayerGroup>
                        <Circle
                            eventHandlers={{
                                mouseover: (e) => {
                                    setOuterColorMap('#378df0')

                                },
                                mouseout: () => {
                                    setOuterColorMap('#0c53a4')
                                },
                            }}
                            center={center}
                            pathOptions={{ fillColor: outerColorMap }}
                            radius={200}
                        />
                        <LayerGroup>
                            <Circle
                                eventHandlers={{
                                    mouseover: (e) => {
                                        setInnerColorMap('black')

                                    },
                                    mouseout: () => {
                                        setInnerColorMap('#aa0021')
                                    },
                                }}
                                center={center}
                                pathOptions={{ fillColor: innerColorMap }}
                                radius={100}
                                stroke={false}
                            />
                        </LayerGroup>

                        <LayerGroup>
                            <Circle
                                eventHandlers={{
                                    click: (e) => {
                                        console.log('zoom coordinatessssssssssss', e.target)

                                        map.setView(
                                            e.target._latlng,
                                            17
                                        );
                                    },
                                    mouseover: (e) => {
                                        setFillColorMap('red')
                                    },
                                    mouseout: () => {
                                        setFillColorMap('green')
                                    },
                                }}
                                center={[51.51, -0.08]}
                                pathOptions={{ color: 'green', fillColor: fillColorMap }}
                                radius={100}
                            />
                        </LayerGroup>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Feature group">
                    <FeatureGroup pathOptions={{ color: 'purple' }}>
                        <Popup>Popup in FeatureGroup</Popup>
                        <Circle center={[51.51, -0.06]} radius={200} />
                        <Rectangle bounds={rectangle} />
                    </FeatureGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </>
    )
}
export default OverlappingMap
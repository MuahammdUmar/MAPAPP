import React, { useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polygon, Rectangle, LayersControl, LayerGroup, FeatureGroup, Circle, useMap, useMapEvent, useMapEvents, Tooltip } from 'react-leaflet';
import { LatLngBounds, LatLngTuple, } from 'leaflet';
import { useMapElement } from 'react-leaflet/types/MapContainer';



const OverlappingMap = () => {

    const map = useMap();
    const [fillColorMap, setFillColorMap] = useState('green')
    const [outerColorMap, setOuterColorMap] = useState(-1)
    const [innerColorMap, setInnerColorMap] = useState('#aa0021')

    const center: LatLngTuple = [60.22352998843195, 24.94705001539827]
    const rectangle: LatLngTuple[] = [
        [51.49, -0.00],
        [51.5, -0.06],
    ]

    const rectangle1: Array<LatLngTuple[]> = [
        [
            [60, 70],
            [80, 90],
        ],
        [
            [60.22352998843195, 24.94705001539827],
            [60.13500641212243, 24.66432372755647],
        ],
        [
            [60.25583006469535, 25.052094025408156],
            [60.16739368515819, 24.76936773756636]
        ],
        [
            [60.259833395882744, 25.196786999980585],
            [60.17140782564092, 24.914060712138788]
        ],
        [
            [60.20826373282, 25.138085935563282],
            [60.119698953798306, 24.85535964772149]
        ],
        [
            [60.23853345668488, 25.078355027910614],
            [60.15005037998829, 24.795628740068818],
        ],
        [
            [60.212448009374754, 25.00376734695335],
            [60.16820109990049, 24.862404203032455],
        ],
        [
            [60.199309900110826, 24.97733470391163],
            [60.155045270947255, 24.835971559990732]
        ],
        [
            [60.18019052880191, 24.99853231050678],
            [60.1359001170413, 24.85716916658588]
        ],
        [
            [60.21163769386681, 25.0439312331336],
            [60.16738969143272, 24.9025680892127],

        ],
        [
            [60.190268017659626, 24.972029980829788],
            [60.17920440537793, 24.936689194849563],
        ],
        [
            [60.1822331840832, 24.96711677039429],
            [60.17116686405875, 24.931775984414067]
        ],
        [
            [60.18000271563173, 24.951712031998234],
            [60.168935643976944, 24.91637124601801]
        ],
        [
            [60.18423940905332, 24.95136875091975],
            [60.17317376510724, 24.916027964939527]
        ],
        [
            [60.189158410001994, 24.96677348931581],
            [60.178094423769004, 24.931432703335584],
        ],
        [
            [60.18471960429552, 24.95630341642265],
            [60.17365412217261, 24.920962630442425]
        ],
        [
            [60.17386547757727, 24.972094346031998],
            [60.162796337863156, 24.936753560051773],
        ],
        [
            [60.170494436844166, 24.96379079865687],
            [60.16495976522987, 24.946120405666758]
        ]
    ]
    const distance = (lat1, lon1, lat2, lon2) => {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }
    // console.log(rectangle1)

    let rec2 = [];
    rectangle1.forEach(a => {
        const aa = distance(a[0][0], a[0][1], a[1][0], a[1][1])
        rec2.push([...a, { 'Cord': aa }])
    })

    const compare = (a, b) => {
        if (a[2].Cord < b[2].Cord) {
            return -1;
        }
        if (a[2].Cord > b[2].Cord) {
            return 1;
        }
        return 0;
    }

    const sortedData = rec2.sort(compare);


    const RgbaColor = () => {
        let color = "#";
        for (let i = 0; i < 3; i++) {
            color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2)
        }
        return color
    }

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

            <LayersControl.Overlay checked name="Layer group with circles">

                <LayerGroup>
                    {sortedData.map((item, index) =>
                        <Rectangle
                            bounds={item}
                            eventHandlers={{
                                click: (e) => {
                                    //debugger
                                    ///console.log('zoom coordinatessssssssssss', e.target._latlngs)

                                    map.setView(
                                        //e.target._latlngs[0][0],
                                        e.latlng,
                                        17
                                    );
                                },
                                mouseover: (e) => {
                                    setOuterColorMap(index)

                                },
                                mouseout: () => {
                                    setOuterColorMap(-1)
                                },
                            }}
                            pathOptions={{ color: 'rgba(74,150,240,0)', stroke: false, fillColor: index == outerColorMap ? '#1E5162' : RgbaColor() }} />
                    )}
                </LayerGroup>
            </LayersControl.Overlay>

        </LayersControl>
        </>
    )
}
export default OverlappingMap

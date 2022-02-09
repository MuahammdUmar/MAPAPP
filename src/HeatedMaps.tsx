import React from 'react'
import { TileLayer,  Rectangle, LayersControl,  FeatureGroup,  useMap,  } from 'react-leaflet';
import {  LatLngTuple, } from 'leaflet';



const HeatedMaps = () => {

    const map = useMap();

    const biggestRectangle: LatLngTuple[] = [


        [60.22352998843195, 24.94705001539827],
        [60.13500641212243, 24.66432372755647],


        [60.25583006469535, 25.052094025408156],
        [60.16739368515819, 24.76936773756636],


        [60.259833395882744, 25.196786999980585],
        [60.17140782564092, 24.914060712138788],


        [60.20826373282, 25.138085935563282],
        [60.119698953798306, 24.85535964772149],


        [60.23853345668488, 25.078355027910614],
        [60.15005037998829, 24.795628740068818],

    ]

    const mediumRectangle: LatLngTuple[] = [

        [60.212448009374754, 25.00376734695335],
        [60.16820109990049, 24.862404203032455],


        [60.199309900110826, 24.97733470391163],
        [60.155045270947255, 24.835971559990732],


        [60.18019052880191, 24.99853231050678],
        [60.1359001170413, 24.85716916658588],


        [60.21163769386681, 25.0439312331336],
        [60.16738969143272, 24.9025680892127],


    ]
    const smallRectangle: LatLngTuple[] = [

        [60.190268017659626, 24.972029980829788],
        [60.17920440537793, 24.936689194849563],


        [60.1822331840832, 24.96711677039429],
        [60.17116686405875, 24.931775984414067],


        [60.18000271563173, 24.951712031998234],
        [60.168935643976944, 24.91637124601801],


        [60.18423940905332, 24.95136875091975],
        [60.17317376510724, 24.916027964939527],


        [60.189158410001994, 24.96677348931581],
        [60.178094423769004, 24.931432703335584],


        [60.18471960429552, 24.95630341642265],
        [60.17365412217261, 24.920962630442425],


        [60.17386547757727, 24.972094346031998],
        [60.162796337863156, 24.936753560051773],

    ]
    const verySmallRectangle: LatLngTuple[] = [
        [60.170494436844166, 24.96379079865687],
        [60.16495976522987, 24.946120405666758]
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

                <LayersControl.Overlay checked name="Layer group with circles">
                    <FeatureGroup>
                        {/* Large Rectangle */}
                        <Rectangle

                            bounds={biggestRectangle}
                            eventHandlers={{
                                click: (e) => {
                                    map.setView(
                                        e.latlng,
                                        15 //Zoom Level
                                    );
                                },
                                mouseover: (e) => {
                                   e.target.setStyle({
                                    fillColor: '#0063ee'
                                })
                                },
                                mouseout: (e) => {
                                    e.target.setStyle({
                                        fillColor: '#38f'
                                    })
                                },
                            }}
                        />
                        {/* Medium Rectangle */}
                        <Rectangle
                            pathOptions={{color: '#a645e4', fillColor: '#a645e4'}} 
                            bounds={mediumRectangle}
                            eventHandlers={{
                                click: (e) => {
                                    map.setView(
                                        e.latlng,
                                        15 //Zoom Level
                                    );
                                },
                                mouseover: (e) => {
                                    e.target.setStyle({
                                     fillColor: '#4a106f'
                                    })
                                 },
                                 mouseout: (e) => {
                                     e.target.setStyle({
                                         fillColor: '#a645e4'
                                     })
                                 },
                            }} />
                        {/* Small Rectangle */}
                        <Rectangle 
                            pathOptions={{color: '#59ce82', fillColor: '#59ce82'}} 
                            bounds={smallRectangle}
                            eventHandlers={{
                                click: (e) => {
                                    map.setView(
                                        e.latlng,
                                        15 //Zoom Level
                                    );
                                },
                                mouseover: (e) => {
                                    e.target.setStyle({
                                     fillColor: '#206f3c'
                                    })
                                 },
                                 mouseout: (e) => {
                                     e.target.setStyle({
                                         fillColor: '#59ce82'
                                     })
                                 },
                            }}
                        />
                        {/* Very Small Rectangle */}
                        <Rectangle
                            pathOptions={{color: '#ff9b89', fillColor: '#ff9b89'}}  
                            bounds={verySmallRectangle}
                            eventHandlers={{
                                click: (e) => {
                                    map.setView(
                                        e.latlng,
                                        15 //Zoom Level
                                    );
                                },
                                mouseover: (e) => {
                                    e.target.setStyle({
                                     fillColor: '#cd1f00'
                                    })
                                 },
                                 mouseout: (e) => {
                                     e.target.setStyle({
                                         fillColor: '#ff9b89'
                                     })
                                 },
                            }} />
                    </FeatureGroup>

                </LayersControl.Overlay>

            </LayersControl>
        </>
    )
}
export default HeatedMaps
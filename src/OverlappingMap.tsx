import { useState, useEffect } from 'react'
import { TileLayer, Rectangle, LayersControl, LayerGroup, useMap,} from 'react-leaflet';
import { LatLngTuple, } from 'leaflet';

//  Api responce data 
import { allCoordinates } from './ApiResponceData';



const OverlappingMap = () => {

    const map = useMap();
    const [outerColorMap, setOuterColorMap] = useState<Number>(-1)
    const [latLngTupleArray, setLatLngTupleArray] = useState<Array<LatLngTuple[]>>([]);


    useEffect(() => {
        setTupleArray();
    }, [])


    const setTupleArray =()=>{
        var tupleArray: Array<LatLngTuple[]> = [];
        allCoordinates.map((item)=> {
            const northEast =  item.northEast.split(",");
            const southWest = item.southWest.split(",")
            tupleArray.push([
                [+northEast[0], +northEast[1]],
                [+southWest[0], +southWest[1]]
            ])
        })

        let tupleAreaCalculateArray = [];
        tupleArray.forEach( (item: number[][]) => {
            const area =  calculateArea(item)
            tupleAreaCalculateArray.push([...item, [area] ])
        })

        const sortedData = tupleAreaCalculateArray.sort(sortArray);

        setLatLngTupleArray(sortedData);
    }
   

    // Calculate the distance area of layer 
    const calculateArea = (item: number[][]) => {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((item[1][0] - item[0][0]) * p) / 2 + c(item[0][0] * p) * c(item[1][0] * p) * (1 - c((item[1][1] - item[0][1]) * p)) / 2;
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    //  Sorted array with respect to distance area
    const sortArray = (a:number[][], b:number[][]) => {
        debugger
        if (a[2][0] < b[2][0]) return -1;
        if (a[2][0] > b[2][0]) return 1;
        return 0;
    }

    // Assign unique color to each layer
    const RgbaColor = () => {
        var letters: string = '0123456789ABCDEF';
        var color: string = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
                    {latLngTupleArray.map((item, index) =>
                        <Rectangle
                            bounds={item}
                            eventHandlers={{
                                click: (e) => {
                                    map.setView(
                                        e.latlng,
                                        15
                                    );
                                },
                                mouseover: (e) => {
                                    setOuterColorMap(index)

                                },
                                mouseout: () => {
                                    setOuterColorMap(-1)
                                },
                            }}
                            pathOptions={{ color: 'rgba(74,150,240,0)', stroke: false, fillColor: index === outerColorMap ? '#1E5162' : RgbaColor() }} />
                    )}
                </LayerGroup>
            </LayersControl.Overlay>
        </LayersControl>
        </>
    )
}
export default OverlappingMap

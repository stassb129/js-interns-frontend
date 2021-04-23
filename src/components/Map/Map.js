import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import {getMapItems} from "../../api/getMapItems";
import {useState} from "react";


const DEFAULT_COORDS = [38.74995, -78.1095];

function LocationMarkers() {
    const [mapMarkers, setMapMarkers] = useState(null)

    const getMarkers = async (chords) => {
        const data = await getMapItems(chords)
        setMapMarkers(data)
    }

    const map = useMapEvents({
        click(e) {
            // map.flyTo(pos[0].location, map.getZoom())
            // console.log(e.latlng)
        },
        moveend() {
            // map.flyTo(pos[0].location, map.getZoom())
            // console.log(map.getBounds())
            getMarkers(map.getBounds())
        }

    })

    return mapMarkers ? mapMarkers.map(e => {
        return <Marker key={e._id} position={e.location}>
            <Popup>
                {e.listing.name}
            </Popup>
        </Marker>
    }) : null

}


function Map({mapPoints}) {

    return (
        <MapContainer
            center={DEFAULT_COORDS}
            zoom={15}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />


            <LocationMarkers pos={mapPoints}/>


        </MapContainer>
    );
}

export default Map;
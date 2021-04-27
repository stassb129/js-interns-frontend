import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import {getMapItems} from "../../api/getMapItems"
import {useState} from "react"
import MarkerClusterGroup from "react-leaflet-markercluster/src/react-leaflet-markercluster"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'


//Add some config for Map Icon
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: `${process.env.PUBLIC_URL}/images/marker-icon-2x.png`,
    iconUrl: `${process.env.PUBLIC_URL}/images/marker-icon.png`,
    shadowUrl: `${process.env.PUBLIC_URL}/images/marker-shadow.png`
})

const DEFAULT_COORDS = [38.74995, -78.1095];

function LocationMarkers() {
    const [mapMarkers, setMapMarkers] = useState(null)

    const getMarkers = async (coords) => {
        const data = await getMapItems(coords)
        setMapMarkers(data)
    }

    const map = useMapEvents({
        moveend() {
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
                url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            <MarkerClusterGroup showCoverageOnHover={false}>
                <LocationMarkers pos={mapPoints}/>
            </MarkerClusterGroup>


        </MapContainer>
    );
}

export default Map;
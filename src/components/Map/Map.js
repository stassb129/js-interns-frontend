import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import {useState} from "react";

function LocationMarkers({pos}) {

    const map = useMapEvents({
        click() {
            map.flyTo(pos[0].location, map.getZoom())
        },
    })

    return pos ? pos.map(e => {
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
            center={
                [38.74995, -78.1095]
            }
            zoom={6}
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

            {/*{*/}
            {/*    mapPoints ? mapPoints.map(e => {*/}
            {/*        return <Marker key={e._id} position={e.location}>*/}
            {/*            <Popup>*/}
            {/*                {e.listing.name}*/}
            {/*            </Popup>*/}
            {/*        </Marker>*/}
            {/*    }) : null*/}
            {/*}*/}

            <LocationMarkers pos={mapPoints}/>


        </MapContainer>
    );
}

export default Map;
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

import React from 'react';


const StandortKartePlain = () => {
    return(
        <MapContainer center={[52.5013, 13.40356]} zoom={17} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.5013, 13.40356]}>
                <Popup>
                Scooter XYZ<br /> Standort Daten.
                </Popup>
            </Marker>
        </MapContainer>
    );
}


export default StandortKartePlain;







import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = () => {
   return (
      <MapContainer
         center={[0, 0]}
         zoom={2}
         style={{ height: '400px', width: '100%' }}
      >
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
         />
      </MapContainer>
   );
};
export default MapComponent
import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import CustomMarker from "./CustomMarker";

const MyMapComponent = withScriptjs(withGoogleMap(({markers}) =>
    <GoogleMap
        defaultZoom={5}
        defaultCenter={{lat: 48.157469, lng: 17.12937}}
    >
        {markers.map((station, key) => <CustomMarker data={station}
                                                     position={{lat: station.latitude, lng: station.longitude}}
                                                     key={key}/>)}
    </GoogleMap>
))

export default MyMapComponent;

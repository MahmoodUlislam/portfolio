import React from 'react'
import { GoogleMap, Marker, withGoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '80vw',
  height: '60vh'
};

const center = {
  lat: 23.870571178094686,
  lng: 90.39377666786204
};

function VGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
     bounds.extend(center);
    
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
       
      >

      <Marker
      key={1}
      position={center}
      
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
 
      </GoogleMap>
  ) : <></>
}

export default React.memo(VGoogleMap)
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 52.08688943290266,
  lng: -106.60993438467395,
};

function VGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(center);

    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        key={1}
        animation={window.google.maps.Animation.BOUNCE}
        position={center}
        onClick={
          function callback() {
            alert("You clicked me! if you want to find me, please contact me at: mahmood.islam@gmail.com");
          }
        }
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(VGoogleMap);

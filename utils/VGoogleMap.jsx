import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 43.766065818687615,
  lng: -79.41059733249753
};

function VGoogleMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  // Use useRef to hold the map instance
  const mapRef = React.useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(center);
    map.fitBounds(bounds);

    // Ensure the zoom level is set after fitBounds
    map.addListener("idle", () => {
      if (map.getZoom() > 12) {
        map.setZoom(12);
      }
    });
  }, []);

  const onUnmount = React.useCallback(() => {
    mapRef.current = null;
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

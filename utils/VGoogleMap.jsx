import React, { useEffect, useRef, useState } from "react";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const center = {
  lat: 52.163688828747254,
  lng: -106.55476328465744
};

function VGoogleMap() {
  const mapRef = useRef(null);
  const [googleMaps, setGoogleMaps] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (window.google?.maps) {
        setGoogleMaps(window.google.maps);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = async () => {
        if (window.google?.maps) {
          setGoogleMaps(window.google.maps);
        }
      };
      document.body.appendChild(script);
    };

    loadGoogleMaps();

    return () => {
      document.body.querySelectorAll("script[src*='maps.googleapis.com']").forEach((script) => {
        script.remove();
      });
    };
  }, []);

  useEffect(() => {
    if (googleMaps && mapRef.current) {
      const map = new googleMaps.Map(mapRef.current, {
        center,
        zoom: 11,
        mapId: process.env.REACT_APP_GOOGLE_MAP_ID, // Optional but recommended
      });
      setMapInstance(map);
    }
  }, [googleMaps]);

  useEffect(() => {
    if (mapInstance && googleMaps) {
      console.log("Adding Marker...");

      // Load the marker library correctly
      googleMaps.importLibrary("marker").then(() => {
        const marker = new googleMaps.marker.AdvancedMarkerElement({
          map: mapInstance,
          position: center,
        });

        marker.addListener("click", ({ domEvent, latLng }) => {
          console.log("Marker clicked at:", latLng);
        });
      });
    }
  }, [mapInstance]);

  return <div ref={mapRef} style={{ width: "100%", height: "80vh" }} />;
}

export default VGoogleMap;

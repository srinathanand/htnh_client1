import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const lat = 42.7488;
const lng = -71.522;

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    zoom: 15,
    width: "100vw",
    height: "50vh",
  });

  return (
    <div>
      <h3>Address: 525 Broad St Nashua, NH 03063 Phone: 1-603-598-4864</h3>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicGFydGhhc2FzdHJ5IiwiYSI6ImNrbThlbnAxdzE3aGwyeG85NHpqZW9pNHoifQ.i63hN-u3JlBZsnzkN4D0iA"
        mapStyle="mapbox://styles/parthasastry/ckm8f34is1f9m19qoznlatt7x"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10}>
          Hindu Temple of New Hampshire
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;

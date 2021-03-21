import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const lat = 42.7488;
const lng = -71.522;

const TempleMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: lat, lng: lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
  </GoogleMap>
))

export default TempleMap

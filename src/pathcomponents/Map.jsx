import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function MapContainer(props) {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ",
})(MapContainer);

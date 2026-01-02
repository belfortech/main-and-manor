import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "450px",
};

const center = {
    lat:25.2048,
    lng:55.2708,
};

const Map: React.FC =() => {
    return(
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string}>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            >
                <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
import { useRef, useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const Map = () => {
  const mapRef = useRef(undefined);
  const city = useSelector((state) => state.currentCity);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const containerStyle = {
    width: "",
    height: "600px",
  };
  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={city}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    </div>
  );
};
export default Map;

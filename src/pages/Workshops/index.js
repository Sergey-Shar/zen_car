import { memo } from "react";
import Map from "../../components/Maps";
import { API_KEY_MAPS } from "../../utils/constants";
import { useJsApiLoader } from "@react-google-maps/api";
import LinearIndeterminate from "../../components/Progress";

const WorkShops = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY_MAPS,
  });

  return <>{isLoaded ? <Map /> : <LinearIndeterminate />}</>;
};

export default memo(WorkShops);

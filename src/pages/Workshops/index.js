import { memo, useEffect } from "react";
import Map from "../../components/Maps";
import { API_KEY_MAPS } from "../../utils/constants";
import { getBrowserLocation } from "../../utils/geo";
import { useJsApiLoader } from "@react-google-maps/api";
import LinearIndeterminate from "../../components/Progress";
import { useDispatch } from "react-redux";
import { createAction } from "../../utils/helpers/actionsCreater";

const WorkShops = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY_MAPS,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getBrowserLocation()
      .then((curreentLoc) => {
        console.log(curreentLoc);
        dispatch(createAction("SET_CURRENT_CITY", curreentLoc));
      })
      .catch((defauldLoc) => {
        dispatch(createAction("SET_CURRENT_CITY", defauldLoc));
        console.log(defauldLoc);
      });
  }, [dispatch]);

  return <>{isLoaded ? <Map /> : <LinearIndeterminate />}</>;
};

export default memo(WorkShops);

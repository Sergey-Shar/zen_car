import { CURRENT_GEO } from "../constants";

export const getBrowserLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(CURRENT_GEO);
        }
      );
    } else {
      reject(CURRENT_GEO);
    }
  });
};

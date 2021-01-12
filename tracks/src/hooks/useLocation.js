import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

const locationHook = (callback) => {
  const [err, setErr] = useState("");

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();

      if (!granted) {
        throw new Error(
          "Location permission not granted. Enable location to continue"
        );
      }

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          callback(location);
        }
      );
    } catch (e) {
      setErr(e.message);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};

export default locationHook;

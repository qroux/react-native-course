import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

const locationHook = (shouldTrack, callback) => {
  const [err, setErr] = useState("");

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();

        if (!granted) {
          throw new Error(
            "Location permission not granted. Enable location to continue"
          );
        }

        const subscriber = await watchPositionAsync(
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

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

export default locationHook;

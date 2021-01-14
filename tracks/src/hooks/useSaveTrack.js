import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    resetLocation,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    // OK
    console.log("USESAVETRACK HOOK =>", name, locations);
    try {
      await createTrack(name, locations);
      await resetLocation();
    } catch (err) {
      console.log(err);
    }
  };

  return [saveTrack];
};

import { useHistory, useParams } from "react-router-dom";
import React from "react";
import { DateLocation } from "../../types/location";
import { places, PlaceType } from "../../types/place";
import { isHotel } from "../../types/hotel";
import Hotels from "./place-hotels";

type PlaceParam = {
  location: DateLocation;
  activity: PlaceType;
};

export const Activities = () => {
  const { activity, location } = useParams<PlaceParam>();

  if (activity === "hotel") {
    const hotelsInLocation = places
      .filter(isHotel)
      .filter((h) => h.dateLocation === location);
    return <Hotels hotels={hotelsInLocation} />;
  }

  return <></>;
};

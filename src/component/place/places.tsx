import { Link, useParams, useRouteMatch } from "react-router-dom";
import { anyang, DateLocation, gwangmyeong } from "../../types/location";
import React, { useEffect } from "react";
import { DateTimeType, dinner, lunch } from "../../types/dates";
import PlaceRestaurants from "./place-restaurants";
import PlaceActivity from "./place-activity";

type PlaceParam = { location: DateLocation; time: DateTimeType };

const Places = () => {
  const { time } = useParams<PlaceParam>();
  if (time === lunch || time === dinner) {
    return <PlaceRestaurants />;
  }

  return <PlaceActivity />;
};

export default Places;

import { places } from "../../types/place";
import { isRestaurant, Restaurant } from "../../types/restaurant";
import { useHistory, useParams } from "react-router-dom";
import { DateDetail, DateTimeType } from "../../types/dates";
import { DateLocation } from "../../types/location";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import RestaurantCard from "./place-restaurant-card";
import SelectButton from "../common/select-button";

type PlaceParam = { location: DateLocation; time: DateTimeType };

const PlaceRestaurants = () => {
  const { location, time } = useParams<PlaceParam>();
  const history = useHistory();
  const allRestaurants = places.filter((p) => {
    return isRestaurant(p);
  }) as Restaurant[];

  const restaurants = allRestaurants.filter((p) => p.dateLocation === location);

  function back() {
    history.goBack();
  }

  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        {restaurants.map((r) => (
          <RestaurantCard key={r.title} {...r} />
        ))}
      </Box>
      <Box my={2}>
        <SelectButton
          onClick={back}
          buttonText={"뒤로가기"}
          color={"default"}
        />
      </Box>
    </>
  );
};

export default PlaceRestaurants;

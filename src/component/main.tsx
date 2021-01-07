import React from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "./intro/intro";
import { Container } from "@material-ui/core";
import { locationUrl, restaurantUrl } from "../types/urls";
import DateLocation from "./date-location";
import Places from "./place/places";
import Result from "./result/result";
import { useSelector } from "react-redux";
import { Dates, DateState } from "../redux/actions";

const Main = () => {
  const dates = useSelector<DateState>((state) => state.dates) as Dates;
  console.log(dates);

  return (
    <Container>
      <Switch>
        <Route path={`${locationUrl}/none/:time`} exact>
          <DateLocation />
        </Route>
        <Route path={`${locationUrl}/:location/:time`}>
          <Places />
        </Route>
        <Route path={"/result"}>
          <Result />
        </Route>
        <Route path={"/"} exact>
          <Intro />
        </Route>
      </Switch>
    </Container>
  );
};

export default Main;

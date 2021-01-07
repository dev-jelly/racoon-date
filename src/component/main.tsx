import React from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "./intro/intro";
import { Container } from "@material-ui/core";
import { eatingUrl, locationUrl } from "../types/urls";
import DateLocation from "./date-location";
import Places from "./place/paces";

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route path={"/"} exact>
          <Intro />
        </Route>
        <Route path={`${locationUrl}/none/:time`} exact>
          <DateLocation />
        </Route>
        <Route path={`${locationUrl}/:location/:time`}>
          <Places />
        </Route>
        <Route path={eatingUrl} exact>
          <></>
        </Route>
      </Switch>
    </Container>
  );
};

export default Main;

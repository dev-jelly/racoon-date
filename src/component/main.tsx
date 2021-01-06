import React from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "./intro";
import { Container } from "@material-ui/core";
import { eatingUrl, locationUrl } from "../types/urls";
import DateLocation from "./date-location";

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route path={"/"} exact>
          <Intro />
        </Route>
        <Route path={`${locationUrl}/:time`}>
          <DateLocation />
        </Route>
        <Route path={eatingUrl} exact>
          <></>
        </Route>
      </Switch>
    </Container>
  );
};

export default Main;

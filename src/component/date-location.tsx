import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import {
  afternoonUrl,
  breakfastUrl,
  dinnerUrl,
  lunchUrl,
  morningUrl,
} from "../types/urls";
import { Typography } from "@material-ui/core";
import SelectButton from "./common/select-button";

const DateLocation = () => {
  let history = useHistory();
  const back = () => {
    history.goBack();
  };
  return (
    <Switch>
      <Route path={breakfastUrl}>
        <Typography>
          최송합니다. 아직 계획서에서 오전은 준비하지 못했어요 ㅠㅠ
        </Typography>
        <Typography>물론 제 마음의 준비는 되었지만요!</Typography>
        <SelectButton onClick={back} buttonText={"뒤로가기"} />
      </Route>
      <Route path={morningUrl}>
        <Typography>
          최송합니다. 아직 계획서에서 오전은 준비하지 못했어요 ㅠㅠ
        </Typography>
        <Typography>물론 제 마음의 준비는 되었지만요!</Typography>
        <SelectButton onClick={back} buttonText={"뒤로가기"} />
      </Route>
      <Route path={lunchUrl}></Route>
      <Route path={afternoonUrl}></Route>
      <Route path={dinnerUrl}></Route>
    </Switch>
  );
};

export default DateLocation;

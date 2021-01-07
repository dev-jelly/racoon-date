import React from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  afternoonUrl,
  breakfastUrl,
  dinnerUrl,
  lunchUrl,
  morningUrl,
} from "../types/urls";
import { Box, Typography } from "@material-ui/core";
import SelectButton from "./common/select-button";
import Locations from "./date-location/locations";

const DateLocation = () => {
  let history = useHistory();
  const back = () => {
    history.goBack();
  };

  let { path, url } = useRouteMatch();
  const { time } = useParams<{ time: string }>();
  if (morningUrl.includes(time) || breakfastUrl.includes(time)) {
    return (
      <Box my={4}>
        <Box my={2}>
          <Typography align={"center"}>
            최송합니다. 아직 계획서에서 오전은 준비하지 못했어요 ㅠㅠ
          </Typography>
          <Typography align={"center"}>
            물론 제 마음의 준비는 되었지만요!
          </Typography>
        </Box>
        <Box my={2}>
          <SelectButton onClick={back} buttonText={"뒤로가기"} />
        </Box>
      </Box>
    );
  }
  return (
    <Box my={4}>
      <Locations />
      <Box my={2}>
        <SelectButton
          onClick={back}
          buttonText={"뒤로가기"}
          color={"default"}
        />
      </Box>
    </Box>
  );
};

export default DateLocation;

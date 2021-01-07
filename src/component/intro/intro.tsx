import React from "react";
import { Button, Grid, Select, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SelectButton from "../common/select-button";
import { useDispatch } from "react-redux";
import { DateState } from "../../redux/actions";
import { Link } from "react-router-dom";
import {
  afternoonUrl,
  breakfastUrl,
  dinnerUrl,
  locationUrl,
  lunchUrl,
  morningUrl,
} from "../../types/urls";

type Props = {};

const Intro = () => {
  const dispatch = useDispatch();
  dispatch({ type: "INIT" });
  return (
    <Box my={4}>
      <Box m={2}>
        <Typography align={"center"} variant={"h1"}>
          라쿤 데이트
        </Typography>
        <Typography align={"center"}>
          너부리를 좋아하는 한 소녀를 위한 데이트 계획서!
        </Typography>
        <Typography align={"center"}>아래의 버튼을 눌러 시작하세요!</Typography>
      </Box>

      <Box>
        <Box my={4}>
          <Typography variant={"h2"} align={"center"}>
            이번 데이트는...
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Link to={locationUrl + "/none" + breakfastUrl}>
            <SelectButton buttonText={"아침도 같이 먹자!"} />
          </Link>
          <Link to={locationUrl + "/none" + morningUrl}>
            <SelectButton buttonText={"아침부터 만나자!"} />
          </Link>
          <Link to={locationUrl + "/none" + lunchUrl}>
            <SelectButton buttonText={"점심에 보자!"} />
          </Link>
          <Link to={locationUrl + "/none" + afternoonUrl}>
            <SelectButton buttonText={"점심먹고 보자!"} />
          </Link>
          <Link to={locationUrl + "/none" + dinnerUrl}>
            <SelectButton buttonText={"저녁만 먹자!"} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;

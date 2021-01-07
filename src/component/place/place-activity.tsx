import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { Link, Route, useHistory, useRouteMatch } from "react-router-dom";
import SelectButton from "../common/select-button";
import React from "react";
import { cafeUrl, hotelUrl } from "../../types/urls";
import { DateLocation } from "../../types/location";
import { DateTimeType } from "../../types/dates";
import { PlaceType } from "../../types/place";
import { Activities } from "./place-activities";

const Cafes = () => {
  const history = useHistory();
  const back = () => {
    history.goBack();
  };
  return (
    <Box my={4}>
      <Box my={2}>
        <Typography variant={"h3"} align={"center"}>
          그치만... 사회적으로 거리를 둬야하는 걸요 ㅠㅠ
        </Typography>
        <Typography align={"center"}>
          언젠가 같이 카페에 갈 수 있으면 좋겠어요 :)
        </Typography>
      </Box>
      <Box my={2}>
        <SelectButton onClick={back} buttonText={"뒤로가기"} />
      </Box>
    </Box>
  );
};
type PlaceParam = {
  activity: PlaceType;
  location: DateLocation;
  dateType: DateTimeType;
};

const PlaceActivity = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Route path={path} exact>
        <Box my={2}>
          <Typography variant={"h2"} align={"center"}>
            오늘 모일 장소는...{" "}
          </Typography>
          <Box
            p={4}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Link to={url + cafeUrl}>
              <SelectButton buttonText={"카페로 가자!"} />
            </Link>
            <Link to={url + hotelUrl}>
              <SelectButton buttonText={"방을 잡자!"} />
            </Link>
          </Box>
        </Box>
      </Route>
      <Route path={`${path}${cafeUrl}`} exact>
        <Cafes />
      </Route>
      <Route path={`${path}/:activity`}>
        <Activities />
      </Route>
    </>
  );
};

export default PlaceActivity;

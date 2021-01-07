import { useDispatch, useSelector } from "react-redux";
import { Dates, DateState, INIT } from "../../redux/actions";
import React from "react";
import { Box, Link, Typography } from "@material-ui/core";
import { DateDetail } from "../../types/dates";
import { isRestaurant, Restaurant } from "../../types/restaurant";
import { Hotel, isHotel } from "../../types/hotel";
import SelectButton from "../common/select-button";
import { useHistory } from "react-router-dom";

const Lunch = (props: DateDetail) => {
  if (isRestaurant(props)) {
    return (
      <Box p={1}>
        <Typography align={"center"}>
          <Link target={"_blank"} href={props.link}>
            {props.title}
          </Link>
          에서 점심을 먹은 뒤
        </Typography>
      </Box>
    );
  }
  return <></>;
};

const Afternoon = (props: DateDetail) => {
  if (isHotel(props)) {
    return (
      <Box p={1}>
        <Typography align={"center"}>
          <Link target={"_blank"} href={props.link}>
            {props.title}
          </Link>
          에서 쉬고
        </Typography>
      </Box>
    );
  }
  return <></>;
};

const Dinner = (props: DateDetail) => {
  if (isRestaurant(props))
    return (
      <Box p={1}>
        <Typography align={"center"}>
          <Link target={"_blank"} href={props.link}>
            {props.title}
          </Link>
          에서 저녁을 먹자!
        </Typography>
      </Box>
    );
  return <></>;
};

const Result = () => {
  const dates = useSelector<DateState>((state) => state.dates) as Dates;
  const dispatch = useDispatch();
  const { afternoon, breakfast, dinner, lunch, morning } = dates;
  const history = useHistory();
  const letter =
    "여기까지 해줘서 고마워여 :) 아직 기능이 많이 부족한데 ㅠㅠ 앞으로 더욱 즐겁게 채워드릴게요! 사랑합니다♥" +
    "";
  const copy = async () => {
    await navigator.clipboard.writeText(
      document.body.innerText
        .replace("결과 복사하기!", "")
        .replace("처음부터 다시하기", "")
        .replace(letter, "")
    );
  };

  const init = () => {
    dispatch({ type: INIT });
    history.push("/");
  };

  return (
    <Box m={4}>
      <Box>
        <Typography align={"center"} color={"textSecondary"}>
          {letter}
        </Typography>
      </Box>
      {/*{morning && <Typography align={"center"}></Typography>}*/}
      {/*{breakfast && <Typography align={"center"}></Typography>}*/}
      {lunch && <Lunch {...lunch} />}
      {afternoon && <Afternoon {...afternoon} />}
      {dinner && <Dinner {...dinner} />}

      <Box
        flexDirection={"row"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SelectButton
          onClick={init}
          color={"default"}
          buttonText={"처음부터 다시하기"}
        />

        <SelectButton onClick={copy} buttonText={"결과 복사하기!"} />
      </Box>
    </Box>
  );
};

export default Result;

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";

import SelectButton from "../common/select-button";
import React from "react";
import { DateLocation } from "../../types/location";
import { DateTimeType, nextTime } from "../../types/dates";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_DATE, DateAction } from "../../redux/actions";
import { Hotel } from "../../types/hotel";
import { hotelUrl } from "../../types/urls";

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    maxWidth: 480,
  },
  title: {
    marginBottom: 12,
  },
  text: {
    marginBottom: 12,
    wordBreak: "break-all",
  },
  rent: {
    marginBottom: 12,
    wordBreak: "break-all",
  },
});
type PlaceParam = { location: DateLocation; time: DateTimeType };

const HotelCard = (hotel: Hotel) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const { time } = useParams<PlaceParam>();
  const onClick = () => {
    dispatch({ type: ADD_DATE, time, date: hotel });
    const next = nextTime(time);
    history.push(url.replace(time, next!!).replace(hotelUrl, ""));
  };

  return (
    <Box p={2}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            {hotel.title}
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            {hotel.text}
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            대실: {hotel.rentMinPrice}원 {hotel.rent}
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            숙박: {hotel.stayMinPrice ?? "??"}원
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            체크인: {hotel.checkIn} 체크아웃: {hotel.checkOut}
          </Typography>

          {hotel.link && (
            <Typography variant="body2" component="p">
              <Link href={hotel.link} target={"_blank"}>
                자세히보기
              </Link>
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <SelectButton onClick={onClick} buttonText={"선택"} />
        </CardActions>
      </Card>
    </Box>
  );
};
export default HotelCard;

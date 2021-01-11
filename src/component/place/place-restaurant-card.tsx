import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Restaurant } from "../../types/restaurant";
import SelectButton from "../common/select-button";
import React from "react";
import { DateLocation } from "../../types/location";
import { DateTimeType, nextTime } from "../../types/dates";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_DATE, DateAction } from "../../redux/actions";

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    maxWidth: 280,
  },
  title: {
    marginBottom: 12,
  },
  text: {
    marginBottom: 12,
    wordBreak: "break-all",
  },
});
type PlaceParam = { location: DateLocation; time: DateTimeType };

const RestaurantCard = (restaurant: Restaurant) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { time } = useParams<PlaceParam>();

  const onClick = () => {
    dispatch({ type: ADD_DATE, time, date: restaurant });
    const next = nextTime(time);
    if (!next) {
      history.push("/result");
      return;
    }
    history.push(url.replace(time, next));
  };

  return (
    <Box p={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            {restaurant.title}
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            {restaurant.text}
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            영업시간: {restaurant.openingHours}
          </Typography>
          {restaurant.link && (
            <Typography variant="body2" component="p">
              <Link href={restaurant.link} target={"_blank"}>
                자세히보기
              </Link>
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <SelectButton
            fullWidth={true}
            onClick={onClick}
            buttonText={"선택"}
          />
        </CardActions>
      </Card>
    </Box>
  );
};
export default RestaurantCard;

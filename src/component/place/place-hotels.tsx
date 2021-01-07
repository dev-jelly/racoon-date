import { Box } from "@material-ui/core";
import HotelCard from "./place-hotel-card";
import SelectButton from "../common/select-button";
import React from "react";
import { Hotel } from "../../types/hotel";
import { useHistory } from "react-router-dom";

type Props = {
  hotels: Hotel[];
};

const Hotels = ({ hotels }: Props) => {
  const history = useHistory();
  const back = () => {
    history.goBack();
  };
  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        {hotels.map((h) => (
          <HotelCard key={h.text} {...h} />
        ))}
      </Box>
      <Box my={2}>
        <SelectButton
          onClick={back}
          buttonText={"뒤로가기"}
          color={"default"}
        />
      </Box>
    </>
  );
};

export default Hotels;

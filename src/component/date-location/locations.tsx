import Box from "@material-ui/core/Box";
import React from "react";
import SelectButton from "../common/select-button";
import { Typography } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import { anyang, gasan, pyeongchon } from "../../types/location";

const Locations = () => {
  let { path, url } = useRouteMatch();

  return (
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
        <Link to={url.replace("none", anyang)}>
          <SelectButton buttonText={"가깝다! 안양"} />
        </Link>
        <Link to={url.replace("none", pyeongchon)}>
          <SelectButton buttonText={"핫플레이스! 범계, 평촌"} />
        </Link>
        <Link to={url.replace("none", gasan)}>
          <SelectButton buttonText={"이외의 가성비! 가산 디지털 단지"} />
        </Link>
        <Box>
          <SelectButton
            buttonText={"역시 맛집은 홍대지! (아직 준비중...)"}
            disabled={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Locations;

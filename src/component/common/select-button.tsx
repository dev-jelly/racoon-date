import Box from "@material-ui/core/Box";
import { Button, ButtonProps, Grid } from "@material-ui/core";
import React from "react";

type Props = {
  buttonText: string;
} & ButtonProps;

const SelectButton = (props: Props) => {
  return (
    <Box
      display={"flex"}
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Button variant={"contained"} color={"primary"} size={"large"} {...props}>
        {props.buttonText}
      </Button>
    </Box>
  );
};

export default SelectButton;

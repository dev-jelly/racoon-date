import Box from "@material-ui/core/Box";
import { Button, ButtonProps } from "@material-ui/core";
import React from "react";

type Props = {
  buttonText: string;
} & ButtonProps;

const SelectButton = (props: Props) => {
  return (
    <Box
      display={"flex"}
      p={2}
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      minWidth={120}
    >
      <Button variant={"contained"} color={"primary"} {...props}>
        {props.buttonText}
      </Button>
    </Box>
  );
};

export default SelectButton;

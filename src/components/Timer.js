import React from "react";

import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Timer = props => {
  let minute = props.minutes;
  let second = props.seconds;

  if (props.minutes < 10) {
    minute = "0" + props.minutes;
  }
  if (props.seconds < 10) {
    second = "0" + props.seconds;
  }

  let time = minute + ":" + second;
  return (
    <CardContent>
      <Typography variant="h2">{time}</Typography>
    </CardContent>
  );
};

export default Timer;

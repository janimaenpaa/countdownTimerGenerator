import React from "react";

import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";




const Timer = (props) => {

    let time = props.minutes + ":" + props.seconds;

    if (props.seconds < 10) {
        time = props.minutes + ":0" + props.seconds;
    }
   return (
    <CardContent>
      <Typography variant="h2">
          {time}
      </Typography>
    </CardContent>
  );
};


export default Timer;
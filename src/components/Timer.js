import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"

import "./Timer.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "center",

    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  timer: {
    fontSize: "12rem"
  }
}));

const Timer = ({minutes, seconds, isRunning, setIsRunning}) => {
  let minute = minutes;
  let second = seconds;

  if (minutes < 10) {
    minute = "0" + minutes;
  }
  if (seconds < 10) {
    second = "0" + seconds;
  }

  let time = minute + ":" + second;
  const classes = useStyles();

  const handleButton = () => {
    isRunning ? (setIsRunning(false)) : (setIsRunning(true))
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CardContent>
        <Typography variant="h2" className={classes.timer}>
          {time}
        </Typography>
        <p>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleButton}
            disableElevation
          >
            {isRunning ? "PYSÄYTÄ" : "KÄYNNISTÄ"}
          </Button>
        </p>
      </CardContent>
    </div>
  );
};

export default Timer;

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import SetTimer from "./components/SetTimer";
import Timer from "./components/Timer";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    minHeight: 200
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: 12,
    marginBottom: 12
  }
});

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const App = () => {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [timeIsSet, setTimeIsSet] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      // Your custom logic here
      if (seconds === 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else {
        setSeconds(seconds - 1);
      }
    },
    isRunning ? 1000 : null
  );

  const classes = useStyles();
  return (
    <div className="App">
      <h1>Randomsitsit</h1>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={12}>
          <Card className={classes.root}>
            {!timeIsSet && (
              <SetTimer
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                timeIsSet={timeIsSet}
                setTimeIsSet={setTimeIsSet}
                setIsRunning={setIsRunning}
              />
            )}
            {timeIsSet && (
              <Timer minutes={minutes} seconds={seconds} />
            )}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

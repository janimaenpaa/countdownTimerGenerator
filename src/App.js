import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import SetTimer from "./components/SetTimer";
import Timer from "./components/Timer";
import Generator from "./components/Generator";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import headerImage from "./img/header.png";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    width: 800,
    minHeight: 200,
    maxWidth: "100%",
    maxHeight: "100%",
    padding: 20,
    background: "ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [originalMinutes, setOriginalMinutes] = useState(0);
  const [originalSeconds, setOriginalSeconds] = useState(0);
  const [timeIsSet, setTimeIsSet] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);

  const handleMinutes = e => {
    setOriginalMinutes(e.target.value);
    setMinutes(e.target.value);
  };

  const handleSeconds = e => {
    setOriginalSeconds(e.target.value);
    setSeconds(e.target.value);
  };

  useInterval(
    () => {
      // Your custom logic here
      if (minutes <= 0 && seconds <= 1) {
        setIsRunning(false);
        setTimeIsUp(true);
      }
      if (seconds <= 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    },
    isRunning ? 1000 : null
  );

  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="App">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "40vh" }}
        >
          <Grid item xs={12}>
            <img src={headerImage} alt="Randomsitsit" style={{padding: "20px"}}/>
          </Grid>
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
                  handleMinutes={handleMinutes}
                  handleSeconds={handleSeconds}
                />
              )}
              {timeIsSet && !timeIsUp && (
                <Timer minutes={minutes} seconds={seconds} />
              )}
              {timeIsUp && (
                <Generator
                  originalMinutes={originalMinutes}
                  originalSeconds={originalSeconds}
                  setMinutes={setMinutes}
                  setSeconds={setSeconds}
                  setTimeIsUp={setTimeIsUp}
                  setIsRunning={setIsRunning}
                />
              )}
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default App;

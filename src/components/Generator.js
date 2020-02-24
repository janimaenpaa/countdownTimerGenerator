import React, { useEffect, useState } from "react";

import GeneratePunishment from "./GeneratePunishment";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CardContent, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "center",

    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

const Generator = ({
  originalMinutes,
  originalSeconds,
  setMinutes,
  setSeconds,
  setTimeIsUp,
  setIsRunning
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  });

  const handleButton = () => {
    setMinutes(originalMinutes);
    setSeconds(originalSeconds);
    setTimeIsUp(false);
    setIsRunning(true);
  };

  const generateRandomTableGroup = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
  };

  return (
    <CardContent>
      {isLoading ? (
        <div className={classes.root}>
          <Typography variant="h3">Arvotaan pöytäryhmää</Typography>
          <br />
          <CircularProgress color="secondary" size="120px" />
        </div>
      ) : (
        <React.Fragment>
          <Typography variant="h3">Pöytäryhmä</Typography>
          <Typography variant="h3">{generateRandomTableGroup()}</Typography>
          <p>
            <GeneratePunishment handleButton={handleButton}/>
          </p>
          
        </React.Fragment>
      )}
    </CardContent>
  );
};

export default Generator;

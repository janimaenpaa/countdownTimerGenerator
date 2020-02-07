import React, { useEffect, useState } from "react";

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

const randomNumber = () => {
  let number = Math.floor(Math.random() * 6) + 1;
  return number;
};

const Generator = props => {
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  });

  const handleButton = () => {
    props.setMinutes(props.originalMinutes);
    props.setSeconds(props.originalSeconds);
    props.setTimeIsUp(false);
    props.setIsRunning(true);
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
          <Typography variant="h3">{randomNumber()}</Typography>
          <br />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleButton}
            disableElevation
          >
            RESTART
          </Button>
        </React.Fragment>
      )}
    </CardContent>
  );
};

export default Generator;

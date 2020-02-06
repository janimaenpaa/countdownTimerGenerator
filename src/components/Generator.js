import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CardContent, Typography } from "@material-ui/core";

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

const Generator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  });

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
          <Typography variant="h3">Pöytäryhmä on numero</Typography>
          <Typography variant="h3">{randomNumber()}</Typography>
        </React.Fragment>
      )}
    </CardContent>
  );
};

export default Generator;

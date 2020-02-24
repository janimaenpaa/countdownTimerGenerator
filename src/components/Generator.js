import React, { useEffect, useState } from "react";

import GeneratePunishment from "./GeneratePunishment";

import {
  CardContent,
  Typography,
  Button,
  CircularProgress,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "center",

    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
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
  const [tableGroupIsGenerated, setTableGroupIsGenerated] = useState(false);
  const [punishmentGenerated, setPunishmentGenerated] = useState(false);
  const [tableGroup, setTableGroup] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    generateNumber();
  }, []);

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    setTableGroup(number);
  };

  const handleButton = () => {
    setMinutes(originalMinutes);
    setSeconds(originalSeconds);
    setTimeIsUp(false);
    setIsRunning(true);
  };

  const handlePunishmentGeneration = () => {
    setTableGroupIsGenerated(true);
    setPunishmentGenerated(true);
  };

  return (
    <CardContent>
      {isLoading ? (
        <div className={classes.root}>
          <Typography variant="h3">ARVOTAAN PÖYTÄRYHMÄÄ</Typography>
          <br />
          <CircularProgress color="secondary" size="120px" />
        </div>
      ) : (
        <div>
          <Typography variant="h3">PÖYTÄRYHMÄ</Typography>
          <Typography variant="h3">{tableGroup}</Typography>
          <p>
            {!punishmentGenerated && (
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                onClick={handlePunishmentGeneration}
                disableElevation
              >
                ARVO RANGAISTUS
              </Button>
            )}
          </p>
          {tableGroupIsGenerated && (
            <GeneratePunishment handleButton={handleButton} />
          )}
        </div>
      )}
    </CardContent>
  );
};

export default Generator;

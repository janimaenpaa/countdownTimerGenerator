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
      generateRandomTableGroup()
    }, 5000);
    return () => clearTimeout(timer);
  });

  const generateRandomTableGroup = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    console.log(number)
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
          <Typography variant="h2">{tableGroup}</Typography>
          <p>
            {!punishmentGenerated && (
              <Button onClick={handlePunishmentGeneration}>
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

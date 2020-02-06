import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: 12,
    marginBottom: 12
  }
});

const SetTimer = props => {
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Aika:", props.minutes + ":" + props.seconds);
    props.setTimeIsSet(true);
    props.setIsRunning(true);
  };

  return (
    <CardContent>
      <Typography variant="h5" component="h2">
        Aseta aika
      </Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Minuutit"
          name="minutes"
          value={props.minutes}
          onChange={e => props.setMinutes(e.target.value)}
        />
        <br /> <br />
        <TextField
          variant="outlined"
          label="Sekuntit"
          name="seconds"
          value={props.seconds}
          onChange={e => props.setSeconds(e.target.value)}
        />
        <p>
          <Button type="submit">ASETA</Button>
        </p>
      </form>
    </CardContent>
  );
};

export default SetTimer;

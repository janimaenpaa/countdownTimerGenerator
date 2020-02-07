import React from "react";

import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SetTimer = props => {
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
          type="number"
          value={props.minutes}
          onChange={e => props.handleMinutes(e)}
        />
        <br /> <br />
        <TextField
          variant="outlined"
          label="Sekuntit"
          name="seconds"
          type="number"
          value={props.seconds}
          onChange={e => props.handleSeconds(e)}
        />
        <p>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            disableElevation
          >
            ASETA
          </Button>
        </p>
      </form>
    </CardContent>
  );
};

export default SetTimer;

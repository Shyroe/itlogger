import React, { useState } from "react";
import { TextField, Button, FormControl } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  form: {
    flex: "1 0 0",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0 5vw",
    // border: "2px solid green",
  },
  action: {
    alignSelf: "flex-end",
  },
  formControll: {
    margin: "30px",
  },
});

const AddTechForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <h2>Create Tech</h2>
        <FormControl>
          <TextField
            // className={classes.formControll}
            id="standard-basic"
            label="First Name"
          />
        </FormControl>
        <FormControl>
          <TextField
            // className={classes.formControll}
            id="standard-basic"
            label="Last Name"
          />
        </FormControl>

        <Button className={classes.action} variant="contained" color="primary">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default AddTechForm;

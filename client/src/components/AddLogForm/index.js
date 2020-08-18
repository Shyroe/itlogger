import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Checkbox,
  Select,
  MenuItem,
  FormControlLabel,
  InputLabel,
} from "@material-ui/core";
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
  select: {
    // marginTop: "50px",
    // marginBottom: "5%",
    color: "#333",
  },
  textInput: {
    // marginBottom: "30px",
  },
  formControll: {
    margin: "30px",
  },
});

const AddLogForm = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [checkedB, setCheckedB] = React.useState(true);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCheckbox = (event) => {
    setCheckedB(event.target.checked);
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <h2>Enter System Log</h2>
        {/* <div className="input-field s12"> */}
        <FormControl>
          <TextField
            // className={classes.formControll}
            id="standard-basic"
            label="Log message"
          />
        </FormControl>
        {/* </div> */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Selec a item</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="" disabled selected>
              Select a item
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedB}
              onChange={handleCheckbox}
              name="checkedB"
              color="primary"
            />
          }
          label="Needs Attention"
        />
        <Button className={classes.action} variant="contained" color="primary">
          Enter
        </Button>
      </form>
    </div>
  );
};

export default AddLogForm;

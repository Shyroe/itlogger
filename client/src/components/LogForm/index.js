import React, { useState, useEffect } from "react";
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
import api from "../../services/api";

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

const LogForm = ({ submitFormLog, handleFormLog, formLog, techs, editLog }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [checkedB, setCheckedB] = React.useState(true);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const handleCheckbox = (event) => {
  //   setCheckedB(event.target.checked);
  // };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={submitFormLog} className={classes.form}>
        <h2> {editLog == true ? "Update Log" : "Register Log"} </h2>
        {/* <div className="input-field s12"> */}
        <FormControl>
          <TextField
            // className={classes.formControll}
            id="standard-basic"
            label="Log message"
            name="description"
            value={formLog.description}
            onChange={handleFormLog}
          />
        </FormControl>
        {/* </div> */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Selec a item</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="tech_id"
            value={1}
            onChange={handleFormLog}
            className={classes.select}
          >
            <MenuItem value="" disabled selected>
              Select a item
            </MenuItem>
            <div>
              {techs.map((tech) => (
                <MenuItem value={tech.id}>
                  {tech.firstname} {tech.lastname}
                </MenuItem>
              ))}
            </div>
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={formLog.warn}
              name="warn"
              value={formLog.warn}
              onChange={handleFormLog}
              color="primary"
            />
          }
          label="Needs Attention"
        />
        <Button
          className={classes.action}
          variant="contained"
          color={editLog == true ? "secondary" : "primary"}
          type="submit"
        >
          {editLog == true ? "Update" : "Register"}
        </Button>
      </form>
    </div>
  );
};

export default LogForm;

import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Delete } from "@material-ui/icons";
const LogItem = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Card className="card">
        <div className="row">
          <CardContent className="col s11">
            <Typography className="card-title teal-text lighten-1">
              Changed network card in server 007
            </Typography>
            <Typography className="grey-text lighten-1">
              <bold className="black-text">ID #1</bold> last updated by{" "}
              <bold className="black-text">Sam Smith</bold> on May 31st 2019,
              11:46:10 am
            </Typography>
          </CardContent>
          <CardActionArea className="col s1">
            <IconButton>
              <Delete />
            </IconButton>
          </CardActionArea>
        </div>
      </Card>
    </div>
  );
};

export default LogItem;

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
const TechItem = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Typography variant="h2" component="h2">
        Technician List
      </Typography>
      <Card className="card">
        <div className="row">
          <CardContent className="col s11">
            <Typography className="card-title">Jhon Doe</Typography>
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

export default TechItem;

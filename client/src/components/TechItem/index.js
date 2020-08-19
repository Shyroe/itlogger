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
const TechItem = ({ tech, deleteTech }) => {
  return (
    <div key={tech.id} style={{ marginBottom: "50px" }}>
      <Card className="card">
        <div className="row">
          <CardContent className="col s11">
            <Typography className="card-title">
              {" "}
              {tech.firstname} {tech.lastname}{" "}
            </Typography>
          </CardContent>
          <CardActionArea className="col s1">
            <IconButton onClick={() => deleteTech(tech.id)}>
              <Delete />
            </IconButton>
          </CardActionArea>
        </div>
      </Card>
    </div>
  );
};

export default TechItem;

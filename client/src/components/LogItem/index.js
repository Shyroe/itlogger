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

const LogItem = ({ log, handleOpenLogModal }) => {
  let warnStatus =
    log.warn == true
      ? "card-title red-text lighten-1"
      : "card-title teal-text lighten-1";
  return (
    <div
      onClick={handleOpenLogModal}
      key={log.id}
      style={{
        marginBottom: "50px",
        cursor: "pointer",
        // border: "2px solid orangered",
      }}
    >
      <Card className="card">
        <div className="row">
          <CardContent className="col s11">
            <Typography className={warnStatus}>{log.description}</Typography>
            <Typography className="grey-text lighten-1">
              <bold className="black-text">ID #{log.id}</bold> last updated by{" "}
              <bold className="black-text">
                {" "}
                {log.firstname} {log.lastname}{" "}
              </bold>{" "}
              {log.date}
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

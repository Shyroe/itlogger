import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Delete, Edit } from "@material-ui/icons";

const LogItem = ({ log, handleOpenLogModal, handleEditLog, deleteLog }) => {
  let warnStatus =
    log.warn == true
      ? "card-title red-text lighten-1"
      : "card-title teal-text lighten-1";
  return (
    <div
      // onClick={() => {
      //   handleOpenLogModal();
      //   handleEditLog(log.id);
      // }}
      // onClick={() => handleEditLog(log.id)}
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
            <IconButton onClick={() => deleteLog(log.id)}>
              <Delete />
            </IconButton>
            <IconButton
              onClick={() => {
                handleOpenLogModal();
                handleEditLog(log.id);
              }}
            >
              <Edit />
            </IconButton>
          </CardActionArea>
        </div>
      </Card>
    </div>
  );
};

export default LogItem;

import React, { useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  TextField,
  Container,
  Fab,
  Modal,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import "./App.css";
import { makeStyles } from "@material-ui/styles";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import LogItem from "./components/LogItem";
import LogForm from "./components/LogForm";
import AddTechForm from "./components/AddTechForm/index";
import TechItem from "./components/TechItem";
import api from "./services/api";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
  },
  appBar: {
    // backgroundColor: theme.palette.secondary.main,
  },
  searchForm: {
    flexGrow: 1,
    // color: theme.palette.grey,
    // "& > *": {
    //   color: "red",
    //   backgroundColor: "#f5f5f5",
    //   // margin: theme.spacing,
    //   width: "60%",
    // },
  },
  modalStyle: {
    width: "50%",
    height: "auto",
    margin: "15vh auto",
    backgroundColor: "white",
    border: "2px solid orangered",
  },
  modalContent: {
    backgroundColor: "white",
    padding: "5vh 5vw",
    height: "100%",
  },
}));

function App() {
  const [openLogModal, setOpenLogModal] = useState(false);
  const [openTechModal, setOpenTechModal] = useState(false);
  const [openTechListModal, setOpenTechListModal] = useState(false);
  const [editLog, setEditLog] = useState(true);
  const [logs, setLogs] = useState([]);
  const [techs, setTechs] = useState([]);
  const [formLog, setFormLog] = useState({
    description: "",
    warn: false,
    tech_id: null,
  });

  const clearForm = () => {
    setFormLog({
      description: "",
      warn: false,
      tech_id: null,
    });
  };

  const handleFormLog = (e) => {
    setFormLog({
      ...formLog,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormLog = async (e) => {
    e.preventDefault();
    //editLog
    setEditLog(false);
    const newLog = {
      description: formLog.description,
      warn: formLog.warn,
      tech_id: formLog.tech_id,
    };

    const dataLog = await api.post("/logs", newLog);
    console.log("submit Log: ", dataLog);
    getAllLogs();
  };

  function handleEditLog(id) {
    setEditLog(true);
    console.log("editLog Id: ", id);
    const selectedItem = logs.find((item) => item.id == id);
    console.log("selectedItem: ", selectedItem);

    setFormLog({
      ...formLog,
      description: selectedItem.description,
      warn: selectedItem.warn,
      tech_id: selectedItem.tech_id,
    });
  }

  async function deleteLog(id) {
    console.log("deleteLog Id: ", id);
    const dataLog = await api.delete(`/logs/${id}`);
    console.log("dataLog: ", dataLog);
    // getAllLogs();
  }

  function initMaterialize() {
    M.AutoInit();
  }

  async function getAllLogs() {
    const logsData = await api.get("/logs");
    console.log("LogsData: ", logsData);
    setLogs([...logsData.data]);
  }

  async function getAllTechs() {
    const techsData = await api.get("/techs");
    console.log("TechsData: ", techsData);
    setTechs([...techsData.data]);
  }

  useEffect(() => {
    initMaterialize();
    getAllLogs();
    getAllTechs();
  }, []);

  const handleOpenLogModal = () => {
    setOpenLogModal(true);
  };
  const handleCloseLogModal = () => {
    setOpenLogModal(false);
  };

  const handleOpenTechModal = () => {
    setOpenTechModal(true);
  };
  const handleCloseTechModal = () => {
    setOpenTechModal(false);
  };

  const handleOpenTechListModal = () => {
    setOpenTechListModal(true);
  };
  const handleCloseTechListModal = () => {
    setOpenTechListModal(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className="nav-wrapper teal lighten-1 darken-1" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className=""
            color="inherit"
            aria-label="menu"
          >
            <SearchIcon />
          </IconButton>
          <form className={classes.searchForm} noValidate autoComplete="off">
            <TextField
              className="input-field text-grey lighten-3"
              id="standard-basic"
              label="Search Logs..."
            />
          </form>
        </Toolbar>
      </AppBar>
      <Container className="system-logs" maxWidth>
        <Container>
          <Typography className="system-title">System Logs</Typography>
        </Container>
        <Container className="list-logs">
          <>
            {logs.map((log) => (
              <LogItem handleOpenLogModal={handleOpenLogModal} log={log} />
            ))}
          </>
        </Container>
      </Container>
      <Modal
        open={openLogModal}
        onClose={handleCloseLogModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modalStyle}
      >
        <LogForm
          submitFormLog={submitFormLog}
          handleFormLog={handleFormLog}
          formLog={formLog}
          techs={techs}
        />
      </Modal>

      <Modal
        open={openTechModal}
        onClose={handleCloseTechModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modalStyle}
      >
        <AddTechForm />
      </Modal>

      <Modal
        open={openTechListModal}
        onClose={handleCloseTechListModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modalStyle}
      >
        <div className={classes.modalContent}>
          <Typography
            style={{ marginBottom: "40px" }}
            variant="h2"
            component="h2"
          >
            Technician List
          </Typography>
          <>
            {techs.map((tech) => (
              <TechItem tech={tech} />
            ))}
          </>
        </div>
        {/* <TechItem /> */}
      </Modal>
      <Container className="footer">
        <div className="fixed-action-btn">
          <a
            onClick={handleOpenLogModal}
            className="btn-floating btn-large teal"
          >
            <i className="large material-icons">add</i>
            {/* <AddIcon style={{ fontSize: "3rem" }} /> */}
          </a>
          <ul>
            <li>
              <a
                onClick={handleOpenTechListModal}
                className="btn-floating green"
              >
                <i className="material-icons large">person</i>
                {/* <AccountCircleRoundedIcon style={{ fontSize: "3rem" }} /> */}
              </a>
            </li>
            <li>
              <a onClick={handleOpenTechModal} className="btn-floating red">
                <i className="material-icons">person</i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default App;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3333;
const HOST = "0.0.0.0";
const routes = require("./routes/main");

//import database connection
require("./database/index.js");
//middlewares
app.use(express.json());
app.use(cors());
app.use(routes);
console.log("HOST: ", HOST);
app.listen(PORT);

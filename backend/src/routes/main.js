const routes = require("express").Router();
const TechController = require("../controllers/TechController");

//Names to Controllers
// index; show; store; update; destroy

routes.get("/techs", TechController.getAllTechs);
routes.post("/techs", TechController.createTech);

module.exports = routes;

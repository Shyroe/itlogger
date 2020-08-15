const routes = require("express").Router();
const TechController = require("../controllers/TechController");
const LogController = require("../controllers/LogController");

//Names to Controllers
// index; show; store; update; destroy

routes.get("/techs", TechController.getAllTechs);
routes.post("/techs", TechController.createTech);
routes.post("/logs", LogController.store);
routes.put("/logs/:log_id", LogController.update);
routes.delete("/logs/:id", LogController.destroy);
routes.get("/logs", LogController.index);

module.exports = routes;

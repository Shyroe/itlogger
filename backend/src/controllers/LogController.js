const knex = require("../database/index");

module.exports = {
  async index(req, res) {
    try {
      // const data = await knex('log').select('*')
      const data = await knex("log")
        .innerJoin("tech", "log.tech_id", "=", "tech.id")
        .select("*");
      console.log("log index: ", data);
      res.json(data);
    } catch (err) {
      console.log("error: ", err);
    }
  },
  async store(req, res) {
    const { description, warn } = req.body;
    const { tech_id } = req.headers;
    const newLog = {
      description,
      warn,
      tech_id,
    };
    try {
      const data = await knex("log").insert(newLog).returning("*");
      const log = data[0];
      console.log("Log Store: ", log);
      res.json(log);
    } catch (err) {
      console.log("error: ", err);
    }
  },
  async update(req, res) {
    const { description, warn } = req.body;
    const { log_id } = req.params;

    // const dataLog = await knex("log").where("id", log_id).returning("*");
    // console.log("dataLog: ", dataLog);
    // const selectedLog = dataLog[0];
    // const { tech_id } = selectedLog;

    // console.log("update ids: tech_id and log_id", log_id, tech_id);
    const newLog = {
      // id: log_id,
      description,
      warn,
    };
    try {
      const data = await knex("log")
        .where("id", log_id)
        .update(newLog)
        .returning("*");
      const logUpdated = data[0];
      console.log("Log Updated: ", logUpdated);
      res.json(logUpdated);
    } catch (err) {
      console.log("error: ", err);
    }
  },
  async destroy(req, res) {
    const { id } = req.params;
    console.log("destroy id: ", id);
    try {
      const data = await knex("log").where("id", id).del();
      console.log("destroy data: ", data);
      res.json({
        message: "Log deleted successfuly",
      });
    } catch (err) {
      console.log("error: ", err);
    }
  },
};

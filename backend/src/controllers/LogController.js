const knex = require("../database/index");

module.exports = {
  async index(req, res) {
    try {
      // const data = await knex('log').select('*')
      const data = await knex("log")
        .innerJoin("tech", "log.tech_id", "=", "tech.id")
        .select("*");
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
};

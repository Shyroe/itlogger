const knex = require("../database/index");

module.exports = {
  async getAllTechs(req, res) {
    try {
      const data = await knex("tech").select("*");
      console.log("getAllTechs Data: ", data);
      res.json(data);
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async createTech(req, res) {
    const { firstname, lastname } = req.body;
    const newTech = {
      firstname,
      lastname,
    };
    try {
      const data = await knex("tech").insert(newTech).returning("*");
      const techData = data[0];
      console.log("createTech Data: ", techData);
      res.json(techData);
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async deleteTech(req, res) {
    const { id } = req.params;
    try {
      const data = await knex("tech").where("id", id).del();
      console.log("deleteTech: ", data);
      res.json(data);
    } catch (err) {
      console.log("error: ", err);
    }
  },
};

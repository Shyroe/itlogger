exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("log")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("log").insert([
        {
          id: 1,
          description: "Consertar estação 034",
          warn: false,
        },
        {
          id: 2,
          description: "Consertar cabos da internet estação 015",
          warn: true,
        },
        {
          id: 3,
          description: "Formatar sistema operacional estação 03",
          warn: true,
        },
      ]);
    });
};

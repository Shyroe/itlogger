exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tech")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tech").insert([
        {
          id: 1,
          firstname: "Joana",
          lastname: "Aruda",
        },
        {
          id: 2,
          firstname: "Fernando",
          lastname: "Pessoa",
        },
        {
          id: 3,
          firstname: "Jhon",
          lastname: "Doe",
        },
      ]);
    });
};

exports.up = async function (knex) {
  await knex.schema.createTable("tech", (table) => {
    table.increments("id");
    table.string("firstname").notNullable();
    table.string("lastname");
  });
};

exports.down = async function (knex) {
  await knex.schema.droptableIfExists("tech");
};

exports.up = async function (knex) {
  await knex.schema.createTable("log", (table) => {
    table.increments("id");
    table.text("description").notNullable();
    table.datetime("date", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.boolean("warn");
    table.integer("tech_id").notNullable().references("id").inTable("tech");
  });
};

exports.down = async function (knex) {
  await knex.schema.droptableIfExists("log");
};

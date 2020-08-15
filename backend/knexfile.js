require("dotenv/config");
// require("dotenv").config();
// Update with your config settings.
const { DB_NAME, DB_HOST, DB_PORT, DB_PASSWORD, DB_USER } = process.env;
console.log("Dotenvs Vars: ", DB_NAME, DB_HOST, DB_PORT, DB_PASSWORD, DB_USER);
const path = require("path");
// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      database: DB_NAME,
      password: DB_PASSWORD,
      // user: "postgres",
      // database: "itlogger",
      // password: "12300",
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      port: DB_PORT,
      database: DB_NAME,
      password: DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
  },
};

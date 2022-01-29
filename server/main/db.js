const Pool = require("pg").Pool;

const pool = new Pool({
  user: `${process.env.dbUser}`,
  password: `${process.env.dbPass}`,
  host: `${process.env.dbHost}`,
  port: process.env.dbPort,
  database: `${process.env.db}`,
});

module.exports = pool;

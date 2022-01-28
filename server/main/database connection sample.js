const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'your user name',
  password: 'your database password here',
  host: 'your host here',
  port: port,
  database: 'your database name here',
});

module.exports = pool;

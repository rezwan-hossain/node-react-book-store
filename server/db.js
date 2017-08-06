const { Pool  } = require("pg");
const pool  = new Pool({
  database: "books-dev",
  user: "postgres",
  password: "123456"
});

// client.connect();

pool.query("SELECT * from books", [], (err, res) => {
  console.log(err ? err.stack : res.rows);
  // client.end();
});

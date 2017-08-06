const { Pool  } = require("pg");
const pool  = new Pool({
  database: "books-dev",
  user: "postgres",
  password: "123456"
});


const express = require('express');
const router = express.Router();

router.get('/books', (req, res)=>{
  // read data form postgres
    pool.query("SELECT * from books", [], (err, result) => {
    res.send(err ? err.stack : result.rows);
  // client.end();
  });
})

export default router;
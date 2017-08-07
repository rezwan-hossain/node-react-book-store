const { Pool } = require("pg");
const pool = new Pool({
  database: "dhb5p3vrjutif",
  user: "hysiqoizkdtntj",
  password: "08b399e15d2819efcb96675ed2d1861985696c5f0b51b042455c93d35f43f7e9",
  host: "ec2-54-83-205-71.compute-1.amazonaws.com",
  ssl: true

  // postgres://hysiqoizkdtntj:08b399e15d2819efcb96675ed2d1861985696c5f0b51b042455c93d35f43f7e9@ec2-54-83-205-71.compute-1.amazonaws.com:5432/dhb5p3vrjutif
});

const express = require("express");
const router = express.Router();

router.get("/books", (req, res) => {
  // read data form postgres
  pool.query("SELECT * from books", [], (err, result) => {
    res.send(err ? err.stack : result.rows);
    // client.end();
  });
});

router.get("/books/:bookId/ratings", (req, res) => {
  // read data form postgres
  pool.query(
    "SELECT * from reviews where book_id = $1",
    [req.params.bookId],
    (err, result) => {
      res.send(err ? err.stack : result.rows);
      // client.end();
    }
  );
});
export default router;

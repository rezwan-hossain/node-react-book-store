const { Client } = require("pg");
const client = new Client({
  database: "books-dev",
  user: "postgres",
  password: "123456"
});

client.connect();

client.query('SELECT * from books', [], (err, res)=>{
  console.log(err?err.stack : res.rows)
  client.end();
})

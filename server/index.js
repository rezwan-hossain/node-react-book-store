const express = require("express");
const app = express();
import serverRender from './render';
//app.use(express.static("../client/"));

app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render('index',  {
    content: serverRender()
  });
});

app.listen(3000, () => {
  console.log("server is running");
});

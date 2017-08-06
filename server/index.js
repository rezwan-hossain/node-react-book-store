const express = require("express");
const app = express();
// import not going to work in node index.js
// coz import not form node. we need to use
// babel-node  to run our server
import serverRender from "./render";
//app.use(express.static("../client/"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    content: serverRender()
  });
});

app.listen(3000, () => {
  console.log("server is running");
});

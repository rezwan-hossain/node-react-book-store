const express = require("express");
const app = express();
// import not going to work in node index.js
// coz import not form node. we need to use
// babel-node  to run our server
import serverRender from "./render";
import apiRouter from "./apiRouter";
const cors = require("cors");
app.use(cors());

app.set("view engine", "ejs");

app.use(express.static("client"));

app.get("/", (req, res) => {
  serverRender().then((renderData) =>{
     res.render("index",{
      markup:renderData.markup,
      initialData: renderData.data,
    })
  });
});

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("server is running");
});

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("default", {
    title: "Home Page",
    users: ["payam", "pouya", "ali", "reza"],
  });
});

app.listen(3000);

const express = require("express");
const app = express();
app.set("view engine", "ejs");
let isLogin = true;
app.listen(3000);
if (isLogin) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.get("/watchList", (req, res) => {
    res.render("watchList");
  });
  app.get("/register", (req, res) => {
    res.render("register");
  });
  app.use((req, res) => {
    res.status(404).render("404");
  });
} else {
  app.get("/register", (req, res) => {
    res.render("register");
  });
  app.use((req, res) => {
    res.render("login");
  });
}

const express = require("express");
const app = express();
let isLogin = true;
app.listen(3000);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
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

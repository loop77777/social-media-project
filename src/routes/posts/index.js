const { Router } = require("express");

const route = Router();

route.get("/", (req, res) => {
  res.send("todo: all posts");
});



module.exports = {
  postsRoute: route,
};
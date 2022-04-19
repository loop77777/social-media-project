const { Router } = require("express");

const route = Router();

route.get("/", (req, res) => {
  res.send("todo: all comments");
});

module.exports = {
  commentRoute: route,
};

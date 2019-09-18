var Burger = require("../models/burger.js");

module.exports = function (app) {
  app.get("/", function (req, res) {
    Burger.findAll({}).then(function (results) {
      var object = {
        burgers: results
      }
      res.render("index", object);
    });
  });
};

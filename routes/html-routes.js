var Burger = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    Burger.burgerTable.findAll({}).then(function (results) {
      var object = {
        burgers: results
      }
      res.render("index", object);
    });
  });
};

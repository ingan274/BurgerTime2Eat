var db = require("../models");

module.exports = function (app) {
  app.get("*", function (req, res) {
    db.burger.findAll().then(function (results) {
      // console.log(results[0].dataValues)
      var object = {
        burgers: results
      }
      // console.log(object)
      res.render("index", object);
    });
    
  });
};

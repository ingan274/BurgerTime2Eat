var Burger = require("../models");

module.exports = function (app) {

    // API All
    app.get("/api/burgers", function (req, res) {
        Burger.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    // Add a chirp
    app.post("/api/burgers", function (req, res) {
        burgerName = req.body.burger_name;
        devoured = req.body.devoured;
        Burger.create({
            burger_name: burgerName,
            devoured: devoured
        }).then(function (results) {
            console.log("Burger added!")
            res.end();
        });

    });

};
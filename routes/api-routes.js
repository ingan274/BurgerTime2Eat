var db = require("../models");

module.exports = function (app) {

    app.get("/api/burgers", function (req, res, next) {
        db.burger.findAll({}).then(function (results) {
            return res.json(results);
        });
    });

    app.post("/api/burgers", function (req, res) {
        burgerName = req.body.burger_name;
        devoured = req.body.devoured;
        db.burger.create({
            burger_name: burgerName,
            devoured: devoured
        }).then(function (results) {
            console.log("Burger added!")
            res.end();
        });

    });

    app.put("/api/burgers/:id", function (req, res) {
        // Add code here to update a post using the values in req.body, where the id is equal to
        // req.body.id and return the result to the user using res.json
        db.burger.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then(function (result) {
                res.json(result);
            });
    });

};
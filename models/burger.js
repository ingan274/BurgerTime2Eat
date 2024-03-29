module.exports = function (sequelize, DataTypes) {
    // Creates a "Chirp" model that matches up with DB
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
       customer_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });

    Burger.sync();
    return Burger;
}


// // INTENDED MYSQL TABLE SET UP
// USE burgers_db;
// CREATE TABLE burgers
//     (
//         burger_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//         burger_name VARCHAR
//         (50) NOT NULL,
//         devoured BOOLEAN DEFAULT false NOT NULL
//     );
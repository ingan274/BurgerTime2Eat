'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('burger', [{
      burger_name: 'In-n-Out Double Double',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      burger_name: "Island's Hula Burger",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      burger_name: "Burger King Whopper",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('burger', null, {});
  }
};

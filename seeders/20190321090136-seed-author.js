'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Authors', [{
        first_name: 'harry',
        last_name: 'potter',
        religion: 'in faith',
        gender: 'Male',
        age: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'ron',
        last_name: 'weasley',
        religion: 'in faith',
        gender: 'Male',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'hermione',
        last_name: 'granger',
        religion: 'in faith',
        gender: 'Female',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'kaka',
        last_name: 'ricardo',
        religion: 'in faith',
        gender: 'Male',
        age: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'rooney',
        last_name: 'wayne',
        religion: 'in faith',
        gender: 'Male',
        age: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
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
    return queryInterface.bulkInsert('Articles', [
      {
        tittle: 'harry',
        body: 'lorem ipsum',
        authorId: 2,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tittle: 'lord of the rings',
        body: 'tolkien',
        authorId: 2,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tittle: 'titanic',
        body: 'lorem ipsum',
        authorId: 2,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tittle: 'soccer',
        body: 'hi he hoooooo',
        authorId: 2,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tittle: 'bayi galak',
        body: 'haahahhahahahaha',
        authorId: 2,
        tagId: 3,
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
  }
};
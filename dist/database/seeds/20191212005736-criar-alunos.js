"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('alunos',
    [
      {
        nome: 'Adão',
        email: 'adao@gmail.com',
        idade: 100,
        peso: 80,
        altura: 1.80,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Eva',
        email: 'eva@gmail.com',
        idade: 90,
        peso: 60,
        altura: 1.70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Abel',
        email: 'abel@gmail.com',
        idade: 50,
        peso: 75,
        altura: 1.90,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {}),

  down: (queryInterface) => queryInterface.bulkDelete('alunos', null, {}),
};

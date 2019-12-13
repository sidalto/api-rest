"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('usuarios',
    [
      {
        nome: 'José da Silva',
        email: 'jose@gmail.com',
        senha_hash: await bcryptjs.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'João da Silva',
        email: 'joao@gmail.com',
        senha_hash: await bcryptjs.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria da Silva',
        email: 'maria@gmail.com',
        senha_hash: await bcryptjs.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {}),

  down: (queryInterface) => queryInterface.bulkDelete('usuarios', null, {}),
};

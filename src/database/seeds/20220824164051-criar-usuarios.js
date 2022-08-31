const bcryptjs = require('bcryptjs');
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Cezar',
          email: 'cezar@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'Cezar 2',
          email: 'cezar2@gmail.com',
          password_hash: await bcryptjs.hash('123579', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'Cezar 3',
          email: 'cezar3@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  async down(queryInterface) { },
};

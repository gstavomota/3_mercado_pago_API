'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('pagamentos',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      topic:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      type:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

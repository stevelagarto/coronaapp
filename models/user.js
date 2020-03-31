'use strict'

module.exports = function (connection, Sequelize) {
  const table = connection.define('User', {
    name: Sequelize.STRING,
    lastName: Sequelize.STRING,
    sex: Sequelize.STRING,
    age: Sequelize.INTEGER
  })

  return table
}

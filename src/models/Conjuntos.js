const sequelize = require('sequelize')
const {DataTypes} = require('sequelize')

const Conjunto = sequelize.define('Conjunto', {
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }

}, {

});

module.exports = Conjunto

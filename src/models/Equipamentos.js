const sequelize = require('sequelize')
const {DataTypes} = require('sequelize')
const Equipamento = sequelize.define('Equipamento', {
  // Model attributes are defined here
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patrimonio: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status:{
    type:DataTypes.STRING,
    defaultValue: 'Backup'
  }

}, {

});

module.exports = Equipamento


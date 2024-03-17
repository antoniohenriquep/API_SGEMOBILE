import { DataTypes } from "sequelize";
import {sequelize} from '../database'

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

export {Conjunto}

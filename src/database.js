import { Sequelize } from 'sequelize';
import { dataBasePassword, dataBaseUsername } from '../dbCredentials';

const sequelize = new Sequelize('SGE',dataBaseUsername,dataBasePassword,{
    dialect: 'mariadb',
    host: '127.0.0.1'
});

export {
    Sequelize,
    sequelize
}
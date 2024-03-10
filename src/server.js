import express from 'express'
import { router } from './routes';
import { Sequelize } from 'sequelize';
import { dataBasePassword, dataBaseUsername } from '../dbCredentials';
const app = express()

const sequelize = new Sequelize('SGE',dataBaseUsername,dataBasePassword,{
    dialect: 'mariadb',
    host: '127.0.0.1'
});

sequelize.authenticate().then(() =>{
    console.log("Conectado com sucesso!");
}).catch((err) =>{
    console.log("Falha ao conectar: "+err);
})

app.use(router)

app.listen(7072,()=>{
  
    console.log('Ola mundo');
})
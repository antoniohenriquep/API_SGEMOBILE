import express from 'express'
import { router } from './routes';
import {sequelize} from './database'
import './models/association'
import { Equipamento } from './models/Equipamentos';
import { Conjunto } from './models/Conjuntos';
const app = express()


async function conectar(){
  await sequelize.authenticate()
  console.log("Conectado com sucesso!");

}
conectar()

app.use(router)

app.listen(7072,()=>{
  
    //console.log('Ola mundo');
})
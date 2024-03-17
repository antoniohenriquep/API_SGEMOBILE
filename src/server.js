import express from 'express'
import { router } from './routes';
import {sequelize} from './database'
import './models/association'
import { Equipamento } from './models/Equipamentos';
import { Conjunto } from './models/Conjuntos';
import { Model } from 'sequelize';
const app = express()
conectar()
// Definição do modelo Movimentacao
class Movimentacao extends Model {}
Movimentacao.init({
  // Outros atributos da movimentação podem ser adicionados aqui
}, { sequelize, modelName: 'movimentacao' });

// Relacionamento: Um conjunto pode ter várias movimentações
Conjunto.hasMany(Movimentacao);
// Relacionamento: Um equipamento retirado pode estar envolvido em várias movimentações
Equipamento.hasMany(Movimentacao, { as: 'EquipamentoRetirado' });
// Relacionamento: Um novo equipamento pode estar envolvido em várias movimentações
Equipamento.hasMany(Movimentacao, { as: 'EquipamentoNovo' });

// Adiciona uma coluna 'ConjuntoId' à tabela Movimentacao
Movimentacao.belongsTo(Conjunto);

// Adiciona colunas 'EquipamentoRetiradoId' e 'EquipamentoNovoId' à tabela Movimentacao
Movimentacao.belongsTo(Equipamento, { as: 'EquipamentoRetirado' });
Movimentacao.belongsTo(Equipamento, { as: 'EquipamentoNovo' });

async function executar(){
  try {
    await sequelize.sync({force:true})
    // Exemplo de uso:
    const conjunto1 = await Conjunto.create({ nome: 'Conjunto A'});
    const equip1 = await Equipamento.create({ descricao: 'Equipamento 1'});

    //console.log(equip1)
    const equip2 = await Equipamento.create({ descricao: 'Equipamento 2' });

    // Criando uma movimentação
    const movimentacao1 = await Movimentacao.create({
      ConjuntoId: conjunto1.id,
      EquipamentoRetiradoId: equip1.id,
      EquipamentoNovoId: equip2.id
    });
    
    // Associando a movimentação ao conjunto, equipamento retirado e novo equipamento

    // Consultando a movimentação e os equipamentos envolvidos
    const movComEquipamentos = await Movimentacao.findOne({ 
      where: { id: movimentacao1.id },
      include: [{ model: Equipamento, as: 'EquipamentoRetirado' }, { model: Equipamento, as: 'EquipamentoNovo' }, Conjunto] 
    });

    console.log('\n\n\n\n\nOla')

    console.log("Conjunto:", movComEquipamentos.Conjunto.nome);
    console.log("Equipamento Retirado:", movComEquipamentos.EquipamentoRetirado.descricao);
    console.log("Novo Equipamento:", movComEquipamentos.EquipamentoNovo.descricao);
  } 
  catch (error) 
  {
    console.log("Seguinte erro"+error)
  }

}



async function conectar(){
  await sequelize.authenticate()
  console.log("Conectado com sucesso!");

}

// sequelize.authenticate().then(() =>{
//     sequelize.sync({force:true})
//     console.log("Conectado com sucesso!");
// }).catch((err) =>{
//     console.log("Falha ao conectar: "+err);
// })

executar()

app.use(router)

app.listen(7072,()=>{
  
    //console.log('Ola mundo');
})
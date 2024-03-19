import { Conjunto } from "./Conjuntos";
import { Equipamento } from "./Equipamentos";

//Criando relacao entre Conjunto e equipamento: Um conjunto pode ter varios equipamentos, mas um equipamento so pode pertencer a um conjunto
Conjunto.hasMany(Equipamento)
Equipamento.belongsTo(Conjunto)

//Criando relacao entre Movimentacao, Conjunto e equipamento
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
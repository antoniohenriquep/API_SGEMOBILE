import { Conjunto } from "./Conjuntos";
import { Equipamento } from "./Equipamentos";

//Criando relacao entre Conjunto e equipamento: Um conjunto pode ter varios equipamentos, mas um equipamento so pode pertencer a um conjunto
Conjunto.hasMany(Equipamento)
Equipamento.belongsTo(Conjunto)

//Criando relacao entre Movimentacao, Conjunto e equipamento
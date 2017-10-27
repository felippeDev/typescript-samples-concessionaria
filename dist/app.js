"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
// Criando carros
var daoCarro = new Dao_1.default();
var journey = new Carro_1.default('Dodge Journey', 4);
var veloster = new Carro_1.default('Veloster', 3);
var cerato = new Carro_1.default('Cerato', 4);
daoCarro.inserir(journey);
daoCarro.inserir(veloster);
daoCarro.inserir(cerato);
// Montando lista de carros da concessionario
var listaDeCarros = [journey, veloster, cerato];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
var daoConcessionaria = new Dao_1.default();
daoConcessionaria.inserir(concessionaria);
//Exibindo lista de carros
// console.log(concessionaria.mostrarListaDeCarros());
//Exibindo horario de funcionamento da concessionaria
// console.log(concessionaria.fornecerHorarioDeFuncionamento());
// Inserindo Pessoa e comprando carro
var daoPessoa = new Dao_1.default();
var pessoa = new Pessoa_1.default('João', 'Veloster');
daoPessoa.inserir(pessoa);
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === pessoa.dizerCarroPreferido()) {
        //Comprar carro
        pessoa.comprarCarro(carro);
    }
});

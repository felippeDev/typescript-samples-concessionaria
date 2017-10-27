import Dao from './Dao'
import Carro from './Carro';
import Moto from './Moto';
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";

// Criando carros
let daoCarro = new Dao<Carro>();
let journey = new Carro('Dodge Journey', 4);
let veloster = new Carro('Veloster', 3);
let cerato = new Carro('Cerato', 4);
daoCarro.inserir(journey);
daoCarro.inserir(veloster);
daoCarro.inserir(cerato);

// Montando lista de carros da concessionario
let listaDeCarros: Array<Carro> = [journey, veloster, cerato];
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
let daoConcessionaria = new Dao<Concessionaria>();
daoConcessionaria.inserir(concessionaria);

//Exibindo lista de carros
// console.log(concessionaria.mostrarListaDeCarros());
//Exibindo horario de funcionamento da concessionaria
// console.log(concessionaria.fornecerHorarioDeFuncionamento());

// Inserindo Pessoa e comprando carro
let daoPessoa = new Dao<Pessoa>();
let pessoa = new Pessoa('João', 'Veloster');
daoPessoa.inserir(pessoa);

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (carro['modelo'] === pessoa.dizerCarroPreferido()) {
    //Comprar carro
    pessoa.comprarCarro(carro);
  }
});
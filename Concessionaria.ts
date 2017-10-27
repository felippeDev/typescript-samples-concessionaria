import Carro from './carro';

export default class Concessionaria {
  private endereco: string;
  private listaDeCarros: Array<Carro>;

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco(): string {
    return this.endereco;
  }

  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros;
  }

  public fornecerHorarioDeFuncionamento(): string {
    return 'De seg a sex das 8h as 18h, sab das 8h as 14h';
  }
}
import Veiculo from './Veiculo';

export default class Moto extends Veiculo {
  constructor(modelo: string, numeroDePortas: number) {
    super();
    this.modelo = modelo;
  }

  public acelerar(): void {
    this.velocidade = this.velocidade + 20;
  }
}
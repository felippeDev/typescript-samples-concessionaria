import { DaoInterface } from './DaoInterface'

export default class Dao<T> implements DaoInterface {
  nomeTabela: string = '';

  inserir(object: T): boolean {
    console.log('inserir');
    return true;
  }

  atualizar(): boolean {
    console.log('atualizar');
    return true;
  }

  remover(id: number): any {
    console.log('remover');
    return Object();
  }

  selecionar(id: number): any {
    console.log('selecionar');
    return Object();
  }

  selectionarTodos(): Array<any> {
    console.log('selecionar tudo');
    return Array<T>();
  }
}
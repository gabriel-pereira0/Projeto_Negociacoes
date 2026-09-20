import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private _negociacoes: Array<Negociacao> = [];

  adiciona(negocicao: Negociacao) {
    this._negociacoes.push(negocicao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this._negociacoes;
  }
}

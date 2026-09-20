import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negocicao: Negociacao) {
    this._negociacoes.push(negocicao);
  }

  lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}

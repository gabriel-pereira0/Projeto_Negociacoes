import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  public adiciona(negocicao: Negociacao) {
    this._negociacoes.push(negocicao);
  }

  public lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}

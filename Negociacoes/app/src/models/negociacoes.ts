import { Modelo } from '../interface/modelo.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  public adiciona(negocicao: Negociacao) {
    this._negociacoes.push(negocicao);
  }

  public lista(): readonly Negociacao[] {
    return this._negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this._negociacoes, null, 2);
  }

  public ehIgual(negociacoes: Negociacoes): boolean {
    if (this._negociacoes.length !== negociacoes.lista().length) {
      return false;
    }
    for (let i = 0; i < this._negociacoes.length; i++) {
      if (!this._negociacoes[i].ehIgual(negociacoes.lista()[i])) {
        return false;
      }
    }
    return true;
  }
}

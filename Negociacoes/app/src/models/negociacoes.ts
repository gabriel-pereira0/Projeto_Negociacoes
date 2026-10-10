import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel {
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
}

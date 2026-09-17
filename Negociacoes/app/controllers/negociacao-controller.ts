import { Negociacao } from '../models/negociacoes.js';

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  constructor() {
    this._inputData = document.querySelector('#data') as HTMLInputElement;
    this._inputQuantidade = document.querySelector(
      '#quantidade',
    ) as HTMLInputElement;
    this._inputValor = document.querySelector('#valor') as HTMLInputElement;
  }

  criaNegociacao(): Negociacao {
    const date = new Date(this._inputData.value);
    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseFloat(this._inputValor.value);

    return new Negociacao(date, quantidade, valor);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao;
    console.log(negociacao);
    this.limparFormulario();
  }

  limparFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';
    this._inputData.focus();
  }
}

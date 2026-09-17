import { Negociacao } from '../models/negociacoes.js';
export class NegociacaoController {
    _inputData;
    _inputQuantidade;
    _inputValor;
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = new Negociacao(new Date(this._inputData.value), Number(this._inputQuantidade.value), Number(this._inputValor.value));
        console.log(negociacao);
    }
}

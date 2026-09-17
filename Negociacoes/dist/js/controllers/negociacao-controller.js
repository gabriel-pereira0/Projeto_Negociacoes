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
    criaNegociacao() {
        const date = new Date(this._inputData.value);
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    adiciona() {
        const negociacao = this.criaNegociacao;
        console.log(negociacao);
        this.limparFormulario();
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}

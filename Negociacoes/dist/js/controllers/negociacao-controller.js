import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    _inputData;
    _inputQuantidade;
    _inputValor;
    _negociacoes = new Negociacoes();
    _negociacoesView = new NegociacoesView('#negociacoesView');
    _mensagemView = new MensagemView('#mensagemView');
    _SABADO = 6;
    _DOMINGO = 0;
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    criaNegociacao() {
        const [ano, mes, dia] = this._inputData.value.split('-').map(Number);
        const date = new Date(ano, mes - 1, dia);
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.diaUtil(negociacao.data)) {
            this._mensagemView.update('Apenas negociações realizadas em dias úteis são aceitas!');
            return;
        }
        this._negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    diaUtil(date) {
        const dia = date.getDay();
        return dia > DiasDaSemana.DOMINGO && dia < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
    atualizaView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}

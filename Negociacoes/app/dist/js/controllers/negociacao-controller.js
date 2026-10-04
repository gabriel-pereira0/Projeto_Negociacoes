import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { TipoMensagem } from '../enums/tipo-mensagem.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    _inputData;
    _inputQuantidade;
    _inputValor;
    _negociacoes = new Negociacoes();
    _negociacoesView = new NegociacoesView('#negociacoesView', true);
    _mensagemView = new MensagemView('#mensagemView');
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this._mensagemView.update({
                texto: 'Apenas negociações realizadas em dias úteis são aceitas!',
                tipo: TipoMensagem.ERRO,
            });
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
        this._mensagemView.update({
            texto: 'Negociação adicionada com sucesso!',
            tipo: TipoMensagem.SUCESSO,
        });
    }
}

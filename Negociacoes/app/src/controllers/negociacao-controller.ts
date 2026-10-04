import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { TipoMensagem } from '../enums/tipo-mensagem.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView', true);
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = document.querySelector('#data') as HTMLInputElement;
    this._inputQuantidade = document.querySelector(
      '#quantidade',
    ) as HTMLInputElement;
    this._inputValor = document.querySelector('#valor') as HTMLInputElement;
    this._negociacoesView.update(this._negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value,
    );
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

  private diaUtil(date: Date) {
    const dia = date.getDay();
    return dia > DiasDaSemana.DOMINGO && dia < DiasDaSemana.SABADO;
  }

  private limparFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';
    this._inputData.focus();
  }

  private atualizaView(): void {
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update({
      texto: 'Negociação adicionada com sucesso!',
      tipo: TipoMensagem.SUCESSO,
    });
  }
}

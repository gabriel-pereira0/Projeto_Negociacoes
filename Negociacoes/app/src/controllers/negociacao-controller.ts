import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { TipoMensagem } from '../enums/tipo-mensagem.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  @domInjector('#data')
  private _inputData!: HTMLInputElement;
  @domInjector('#quantidade')
  private _inputQuantidade!: HTMLInputElement;
  @domInjector('#valor')
  private _inputValor!: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  @inspect
  @logarTempoDeExecucao(true)
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

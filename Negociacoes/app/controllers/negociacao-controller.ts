import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = document.querySelector('#data') as HTMLInputElement;
    this._inputQuantidade = document.querySelector(
      '#quantidade',
    ) as HTMLInputElement;
    this._inputValor = document.querySelector('#valor') as HTMLInputElement;
    this._negociacoesView.update(this._negociacoes);
  }

  private criaNegociacao(): Negociacao {
    const [ano, mes, dia] = this._inputData.value.split('-').map(Number);
    const date = new Date(ano, mes - 1, dia);
    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseFloat(this._inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
      this._negociacoes.adiciona(negociacao);
      this.atualizaView();
      this.limparFormulario();
    } else {
      this._mensagemView.update(
        'Apenas negociações tem dias úteis são aceitas!',
      );
    }
  }

  private limparFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';
    this._inputData.focus();
  }

  private atualizaView(): void {
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }
}

import { Imprimivel } from '../utils/imprimivel.js';

export class Negociacao implements Imprimivel {
  constructor(
    private _data: Date,
    readonly quantidade: number,
    readonly valor: number,
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string,
  ): Negociacao {
    const [ano, mes, dia] = dataString.split('-').map(Number);
    const date = new Date(ano, mes - 1, dia);
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
  }
}

import { Negociacoes } from '../models/negociacoes.js';

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector<HTMLElement>(seletor);

    if (!elemento) {
      throw new Error(`Elemento não encontrado: ${seletor}`);
    }

    this.elemento = elemento;
  }

  template(model: Negociacoes): string {
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                  ${model
                    .lista()
                    .map((Negociacao) => {
                      return `
                    <tr>
                    <td>${new Intl.DateTimeFormat().format(Negociacao.data)}</td>
                      <td>${Negociacao.quantidade}</td>
                      <td>${Negociacao.valor}</td>
                    </tr>`;
                    })
                    .join('')}
                </tbody>
            </table>
        `;
  }
  update(model: Negociacoes): void {
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }
}

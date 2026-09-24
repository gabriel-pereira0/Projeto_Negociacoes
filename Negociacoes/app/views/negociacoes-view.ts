import { Negociacoes } from '../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {
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
}

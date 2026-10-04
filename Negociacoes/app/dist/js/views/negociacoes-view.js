import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
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
                    <td>${this.formatarData(Negociacao.data)}</td>
                      <td>${Negociacao.quantidade}</td>
                      <td>${Negociacao.valor}</td>
                    </tr>`;
        })
            .join('')}
                </tbody>
            </table>
        `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}

export class NegociacoesView {
    elemento;
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw new Error(`Elemento não encontrado: ${seletor}`);
        }
        this.elemento = elemento;
    }
    template() {
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

                </tbody>
            </table>
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}

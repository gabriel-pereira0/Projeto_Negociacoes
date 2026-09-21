export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector<HTMLElement>(seletor);

    if (!elemento) {
      throw new Error(`Elemento não encontrado: ${seletor}`);
    }

    this.elemento = elemento;
  }

  template(): string {
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
  update(): void {
    this.elemento.innerHTML = this.template();
  }
}

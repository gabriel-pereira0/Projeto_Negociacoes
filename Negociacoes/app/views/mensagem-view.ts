export class MensagemView {
  private element: HTMLElement;

  constructor(seletor: string) {
    const element = document.querySelector<HTMLElement>(seletor);

    if (!element) {
      throw new Error(`Elemento "${seletor}" não encontrado!`);
    }
    this.element = element;
  }
  template(model: string): string {
    return `
        <p class="alert alert-info">${model}</p>
    `;
  }

  update(model: string): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}

export class View {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector<HTMLElement>(seletor);

    if (!elemento) {
      throw new Error(`Elemento "${seletor}" não encontrado!`);
    }
    this.elemento = elemento;
  }
}

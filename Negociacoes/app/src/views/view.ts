export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector<HTMLElement>(seletor);

    if (!elemento) {
      throw new Error(`Elemento "${seletor}" não encontrado!`);
    }
    this.elemento = elemento;
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }
}

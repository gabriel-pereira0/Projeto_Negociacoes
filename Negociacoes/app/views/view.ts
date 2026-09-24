import { Negociacoes } from '../models/negociacoes.js';

export class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector<HTMLElement>(seletor);

    if (!elemento) {
      throw new Error(`Elemento "${seletor}" não encontrado!`);
    }
    this.elemento = elemento;
  }

  template(model: T): string {
    throw Error('Classe filha precisa implementar o método template!');
  }

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}

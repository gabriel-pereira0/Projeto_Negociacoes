export class View {
    elemento;
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw new Error(`Elemento "${seletor}" não encontrado!`);
        }
        this.elemento = elemento;
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}

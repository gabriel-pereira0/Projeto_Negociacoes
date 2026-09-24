export class View {
    elemento;
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw new Error(`Elemento "${seletor}" não encontrado!`);
        }
        this.elemento = elemento;
    }
    template(model) {
        throw Error('Classe filha precisa implementar o método template!');
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}

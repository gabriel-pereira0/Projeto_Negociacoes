export class MensagemView {
    element;
    constructor(seletor) {
        const element = document.querySelector(seletor);
        if (!element) {
            throw new Error(`Elemento "${seletor}" não encontrado!`);
        }
        this.element = element;
    }
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
    `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}

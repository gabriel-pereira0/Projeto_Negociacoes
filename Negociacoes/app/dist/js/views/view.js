export class View {
    elemento;
    escapar = false;
    constructor(seletor, escapar) {
        const elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
        if (!elemento) {
            throw new Error(`Elemento "${seletor}" não encontrado!`);
        }
        this.elemento = elemento;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}

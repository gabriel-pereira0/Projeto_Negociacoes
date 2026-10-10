export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negocicao) {
        this._negociacoes.push(negocicao);
    }
    lista() {
        return this._negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this._negociacoes, null, 2);
    }
}

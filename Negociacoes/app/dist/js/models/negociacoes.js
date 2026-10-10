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
}

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
    ehIgual(negociacoes) {
        if (this._negociacoes.length !== negociacoes.lista().length) {
            return false;
        }
        for (let i = 0; i < this._negociacoes.length; i++) {
            if (!this._negociacoes[i].ehIgual(negociacoes.lista()[i])) {
                return false;
            }
        }
        return true;
    }
}

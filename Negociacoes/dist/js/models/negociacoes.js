export class Negociacoes {
    _negociacoes = [];
    adiciona(negocicao) {
        this._negociacoes.push(negocicao);
    }
    lista() {
        return this._negociacoes;
    }
}

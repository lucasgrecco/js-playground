class ListaNegociacoes {

    constructor(negociacao){
       this._negociacao = [];
    }

    adiciona(negociacao) {
        this._negociacao.push(negociacao);
    }


    get negociacao() {
        return [].concat(this._negociacao);
    }
}
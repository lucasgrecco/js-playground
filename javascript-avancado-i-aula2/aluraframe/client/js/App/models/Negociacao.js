class Negociacao {

    constructor(data, quantidade, valor) {
        // this.data = new Date();
        // this.quantidade = 0;
        // this.valor = 0;
        this._data = data;
        // this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // Object.freeze();
    }


    set data(value) {
        this._data = value;
    }

    get data() {
        return new Date(this._data.getTime());
        // return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    getVolume() {
        return this.quantidade * this.valor;
    }

}
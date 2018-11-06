class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona(event) {
        event.preventDefault();
        alert('gibimba');
        //
        // let $ = document.querySelector.bind(document);
        // let inputData = $('#data');
        // let inputQuantidade = $('#quantidade');
        // let inputValor = $('#valor');

        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);
    }
}
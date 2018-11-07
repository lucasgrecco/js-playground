class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona(event) {
        event.preventDefault();

        let arData = this._inputData.value.split('-');
        // console.log(this._inputData.value);
        // console.log(arData);

        let data = new Date(arData);
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        //numeros.map(function (item) { return item * 2; })

        // alert('gibimba');
        // let $ = document.querySelector.bind(document);
        // let inputData = $('#data');
        // let inputQuantidade = $('#quantidade');
        // let inputValor = $('#valor');

        console.log(typeof (this._inputData.value));
        console.log(data);
        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);
    }
}
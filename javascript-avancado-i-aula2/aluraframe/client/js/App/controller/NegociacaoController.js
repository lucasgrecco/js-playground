class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }


    adiciona(event) {
        event.preventDefault();
        alert('gibimba');
        //
        // let $ = document.querySelector.bind(document);
        // let inputData = $('#data');
        // let inputQuantidade = $('#quantidade');
        // let inputValor = $('#valor');

        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);
    }
}
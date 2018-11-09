class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();

        let inputdata = DataHelper.textToDate(this._inputData.value);

        console.log(inputdata);
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._limpaFormulario();


        console.log(this._listaNegociacoes.negociacao);
        // console.log(DataHelper.dateToText(negociacao.data));
    }


    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();

    }

    _criaNegociacao() {
        return new Negociacao(
            DataHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}
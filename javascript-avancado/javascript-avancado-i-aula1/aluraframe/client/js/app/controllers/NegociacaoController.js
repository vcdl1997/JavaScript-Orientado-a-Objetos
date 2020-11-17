class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		/*
			inserindo o .bind informamos que aquela metodo ainda está associada ao objeto document 
			e poderemos utilizar este alias como no JQuery.
		*/

		this._inputData =  $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		/* 
			Convertemos os campos do formulario em propriedades da nossa Classe de Controller, 
			com isso ao instanciarmos um objeto da mesma, 
			já localizamos cada um deles e evitamos sucessivas buscas no DOM.
		*/
		this._listaNegociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($("#negociacoesView"));
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($("#mensagemView"));
		this._mensagemView.update(this._mensagem);
	}


	adiciona(event){
		event.preventDefault();	

		let negociacao = this._criaNegociacao();
		this._listaNegociacoes.adiciona(negociacao);
		this._negociacoesView.update(this._listaNegociacoes);
		this._limpaFormulario();

		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._mensagemView.update(this._mensagem);
	}


	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaFormulario(){
		document.querySelector(".form").reset();
    	this._inputData.focus();
	}

}
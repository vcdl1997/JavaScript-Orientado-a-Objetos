class Negociacao{
	/*
		O UNDERLINE É UMA CONVENÇÃO PARA INDICAR QUE AQUELAS PROPRIEDADES 
		SÓ PODEM SER ACESSADAS DENTRO DA PRÓPRIA CLASSE, 
		OU SEJA NÃO PODEM SER ACESSADO POR SUAS INSTANCIAS.

		ESTÁ CONVENÇÃO SE DÁ PELO FATO DE O JAVASCRIPT NÃO POSSUIR MODIFICADORES DE ACESSO, 
		DESTA FORMA NOSSO UNDERLINE TEM O MESMO PROPÓSITO DO MODIFICADOR PRIVATE, 
		SENDO POSSÍVEL A ALTERAÇÃO APENAS POR MEIO DE METODOS DENTRO DA PRÓPRIA CLASSE.
	*/


	constructor(data, quantidade, valor){
		/*
			desta forma estamos assegurando que o objeto data não sofrerá mudanças externas, 
			ou seja criamos uma nova instancia que apontará para outro endereço de memória.
		*/  
		this._data = new Date(data.getTime()); 
		this._quantidade = quantidade;
		this._valor = valor;

		Object.freeze(this); 
		/*
			O método Object.freeze() torna as propriedades da nossa instancia imutáveis, 
			porém em caso de objetos como de Data é necessário um tratamento 
			semelhante ao realizado em nosso construtor.
		*/
	}


	/*
		FUNÇÕES QUANDO DECLARADAS DENTRO DE UMA CLASSE RECEBEM O NOME DE METÓDO, 
		QUANDO DECLARADAS DE FORMA PROCEDURAL SÃO CHAMADAS APENAS DE FUNÇÕES
	*/
	get volume(){
		return this._quantidade * this._valor;
	}

	get data(){
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}

}
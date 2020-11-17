class DateHelper{

	constructor(){
		throw new Error('Está classe não pode ser instanciada');
	}

	static textoParaData(texto){

		if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error("Deve estar no formato yyyy-mm-dd");


		/* 
			os "... - 3 pontinhos", é conhecido como spread operator, ele indica que aquele array deve ser desmenbrado.
			Com isso passamos adequadamente para o nosso contrutor de data, um dado para cada parametro.
		*/
		return new Date(
			...texto
			.split('-')
			.map((valor, posicao)=>{
				if(posicao == 1) return Number(valor) - 1;
				return valor;
			})
		);
	}

	static dataParaTexto(data){
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}
}
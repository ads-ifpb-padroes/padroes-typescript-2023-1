//---------------------------------------- CUSTOMER ----------------------------------------
interface Cliente {
	name: string;
	info(): void;
}

class JuridicaCliente implements Cliente {
	cnpj: string;
	constructor(public name: string, cnpj: string) {
		this.name += ' - Pessoa Júridica';
		this.cnpj = cnpj;
	}

	info(): void {
		console.log(
			`\nA Pessoa Jurídica intitulada como ${this.name} possui o CNPJ: ${this.cnpj}`
		);
	}
}
class FisicaCliente implements Cliente {
	cpf: string;
	constructor(public name: string, cpf: string) {
		this.name += ' - Pessoa Física';
		this.cpf = cpf;
	}

	info(): void {
		console.log(
			`\nA Pessoa Física intitulada como ${this.name} possui o CPF: ${this.cpf}`
		);
	}
}

//---------------------------------------- MAQUINA ----------------------------------------
interface Maquina {
	name: string;
	dataFabricacao: string;
	info(): void;
}

class JuridicaMaquina implements Maquina {
	constructor(public name: string, public dataFabricacao: string) {
		this.name = name;
		this.dataFabricacao = dataFabricacao;
	}

	info(): void {
		console.log(
			`\nA maquina ${this.name} foi fabricada no dia ${this.dataFabricacao} e está disponivel para Pessoas Jurídicas`
		);
	}
}
class FisicaMaquina implements Maquina {
	constructor(public name: string, public dataFabricacao: string) {
		this.name = name;
		this.dataFabricacao = dataFabricacao;
	}

	info(): void {
		console.log(
			`\nA maquina ${this.name} foi fabricada no dia ${this.dataFabricacao} e está disponivel para Pessoas Físicas`
		);
	}
}

//---------------------------------------- FACTORY ----------------------------------------
interface ClienteMaquinaFactory {
	createCliente(clienteName: string, documentoOficial: string): Cliente;
	createMaquina(maquinaName: string, fabricacao: string): Maquina;
}

class JuridicaCreateClienteMaquinaFactory implements ClienteMaquinaFactory {
	createCliente(clienteName: string, cnpjJuridico: string): Cliente {
		return new JuridicaCliente(clienteName, cnpjJuridico);
	}

	createMaquina(maquinaName: string, fabricacao: string): Maquina {
		return new JuridicaMaquina(maquinaName, fabricacao);
	}
}

class FisicaCreateClienteMaquinaFactory implements ClienteMaquinaFactory {
	createCliente(clienteName: string, cpfFisico: string): Cliente {
		return new FisicaCliente(clienteName, cpfFisico);
	}

	createMaquina(maquinaName: string, fabricacao: string): Maquina {
		return new FisicaMaquina(maquinaName, fabricacao);
	}
}

//---------------------------------------- USUÁRIO ----------------------------------------
const PessoaJuridicaFactory = new JuridicaCreateClienteMaquinaFactory();
const PessoaFisicaFactory = new FisicaCreateClienteMaquinaFactory();

const maquina1 = PessoaJuridicaFactory.createMaquina(
	'Retroescavadeira',
	'10/08/21'
);
const maquina2 = PessoaJuridicaFactory.createMaquina(
	'Tratores de Esteira',
	'25/04/20'
);

const cliente1 = PessoaJuridicaFactory.createCliente(
	'Lucas',
	'10.231.546/0001-29'
);
const cliente2 = PessoaFisicaFactory.createCliente(
	'Jonathan',
	'098.765.432-32'
);

maquina1.info();
maquina2.info();

cliente1.info();
cliente2.info();

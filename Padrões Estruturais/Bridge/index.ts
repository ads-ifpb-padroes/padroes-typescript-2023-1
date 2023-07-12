interface Motor {
	ligar(): void;
	desligar(): void;
}

class MotorV6 implements Motor {
	ligar(): void {
		console.log('Motor V6 está ligado :)');
	}

	desligar(): void {
		console.log('Motor V6 está desligado :(');
	}
}

class MotorV8 implements Motor {
	ligar(): void {
		console.log('Motor V8 está ligado :)');
	}

	desligar(): void {
		console.log('Motor V8 está desligado :(');
	}
}

abstract class Veiculo {
	protected motor: Motor;

	constructor(motor: Motor) {
		this.motor = motor;
	}

	abstract ligar(): void;
	abstract desligar(): void;
}

class Mercedes extends Veiculo {
	ligar(): void {
		console.log('Iniciando Mercedes :)');
		this.motor.ligar();
	}

	desligar(): void {
		console.log('Parando Mercedes :(');
		this.motor.desligar();
	}
}

class BMW extends Veiculo {
	ligar(): void {
		console.log('Iniciando BMW :)');
		this.motor.ligar();
	}

	desligar(): void {
		console.log('Parando BMW :(');
		this.motor.desligar();
	}
}

const V6: Motor = new MotorV6();
const mercedes: Veiculo = new Mercedes(V6);
mercedes.ligar();
mercedes.desligar();

console.log('\n--------------------\n');

const V8: Motor = new MotorV8();
const bmw: Veiculo = new BMW(V8);
bmw.ligar();
bmw.desligar();

interface Subject {
    addObserver(observer: Observer): void;
    deletarObserver(observer: Observer): void;
    notificarObservers(): void;
}
  
interface Observer {
    notificar(data: any): void;
}
  
class VerificadorDeTemperatura implements Subject {
    private observers: Observer[] = [];
    private temperatura: number = 0;
  
    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
  
    public deletarObserver(observer: Observer): void {
      this.observers = this.observers.filter((o) => o !== observer);
    }
  
    public notificarObservers(): void {
      const data = { temperatura: this.temperatura};
      this.observers.forEach((observer) => observer.notificar(data));
    }
  
    public setTemperatura(temperatura: number): void {
      this.temperatura = temperatura;
      this.notificarObservers();
    }
}
  
class ArCondicionado implements Observer {
    protected running: boolean = false;
    public notificar(data: any): void {
        console.log(`Ar Condicionado: Temperatura Atual: ${data.temperatura}°C`);
        if (data.temperatura > 20) {
        return this.ligar();
        }
        return this.desligar();
    }

    protected ligar () {
        if (!this.running) {
            this.running = true;
            console.log('Ar Condicionado ligou!');
        }
    }
    
    protected desligar () {
        if (this.running) {
            this.running = false;
            console.log('Ar Condicionado desligou!');
        }
    }
}

class Ventilador implements Observer {
    protected running: boolean = false;
    public notificar(data: any): void {
        console.log(`Ventilador: Temperatura Atual: ${data.temperatura}°C`);
        if (data.temperatura > 20) {
        return this.ligar();
        }
        return this.desligar();
        }

    protected ligar () {
      if (!this.running) {
        this.running = true;
        console.log('Ventilador ligou!');
      }
    }
    
    protected desligar () {
      if (this.running) {
        this.running = false;
        console.log('Ventilador desligou!');
      }
    }
}

class Aquecedor implements Observer {
    protected running: boolean = false;
    public notificar(data: any): void {
        console.log(`Aquecedor: Temperatura Atual: ${data.temperatura}°C`);
        if (data.temperatura < 10) {
        return this.ligar();
        }
        return this.desligar();
    }

    protected ligar () {
        if (!this.running) {
            this.running = true;
            console.log('Aquecedor ligou!');
        }
    }
        
    protected desligar () {
        if (this.running) {
            this.running = false;
            console.log('Aquecedor desligou!');
        }
    }
}
  
class TV implements Observer {
    public notificar(data: any): void {
      console.log(`TV: Temperatura Atual: ${data.temperatura}°C`);
    }
}

class Celular implements Observer {
    public notificar(data: any): void {
      console.log(`Celular: Temperatura Atual: ${data.temperatura}°C`);
    }
}
  
const regulador = new VerificadorDeTemperatura();
const ar = new ArCondicionado();
const tv = new TV();
const celular = new Celular();
const ventilador = new Ventilador();
const aquecedor = new Aquecedor();
  
regulador.addObserver(ar);
regulador.addObserver(tv);
regulador.addObserver(celular);
regulador.addObserver(ventilador);
regulador.addObserver(aquecedor);
  
regulador.setTemperatura(25);
console.log("\n")
regulador.setTemperatura(19);
console.log("\n")
regulador.setTemperatura(5);

/*
Ar Condicionado: Temperatura Atual: 25°C
Ar Condicionado ligou!
TV: Temperatura Atual: 25°C
Celular: Temperatura Atual: 25°C
Ventilador: Temperatura Atual: 25°C
Ventilador ligou!
Aquecedor: Temperatura Atual: 25°C


Ar Condicionado: Temperatura Atual: 19°C
Ar Condicionado desligou!
TV: Temperatura Atual: 19°C
Celular: Temperatura Atual: 19°C
Ventilador: Temperatura Atual: 19°C
Ventilador desligou!
Aquecedor: Temperatura Atual: 19°C


Ar Condicionado: Temperatura Atual: 5°C
TV: Temperatura Atual: 5°C
Celular: Temperatura Atual: 5°C
Ventilador: Temperatura Atual: 5°C
Aquecedor: Temperatura Atual: 5°C
Aquecedor ligou!
*/

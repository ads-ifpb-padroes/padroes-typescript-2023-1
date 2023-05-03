interface Command {
    execute(): void;
}
  
class ArCondicionado {
    ligar(): void {
      console.log("Ar Condicionado ligou!");
    }
    
    desligar(): void {
      console.log("Ar Condicionado desligou!");
    }

    horaDesligar(): void {
       console.log("Ar Condicionado irá desligar em 1 hora!");
    }
}
  
class LigarAr implements Command {
    private ar: ArCondicionado 
  
    constructor(ar: ArCondicionado ) { 
      this.ar = ar;
    }
  
    execute(): void {
      this.ar.ligar();
    }
}
  
class DesligarAr implements Command {
    private ar: ArCondicionado; 
  
    constructor(ar: ArCondicionado) { 
      this.ar = ar;
    }
  
    execute(): void {
      this.ar.desligar();
    }
}

class ProgramarHoraDesligar implements Command {
    private ar: ArCondicionado 
  
    constructor(ar: ArCondicionado ) { 
      this.ar = ar;
    }
  
    execute(): void {
      this.ar.horaDesligar();
    }
}
  
class Controle {
    private comandos: Command[] = [];
  
    addCommand(comando: Command): void {
      this.comandos.push(comando);
    }
  
    clicarBotao(buttonNumber: number): void {
      if (this.comandos[buttonNumber]) {
        this.comandos[buttonNumber].execute();
      }
      else{
        console.log("O número clicado/inserido é inválido, pois não existe esse comando no controle.");
      }
    }
}

// Criando um controle
const controleAr = new Controle();
  
// Criando um ar condicionado e os comandos para ligar e desligar
const arCondicionado = new ArCondicionado(); 
const ligarAr = new LigarAr(arCondicionado);  
const desligarAr = new DesligarAr(arCondicionado);
const programarAr = new ProgramarHoraDesligar(arCondicionado);
  
// Adicionando os comandos ao controle remoto
controleAr.addCommand(ligarAr); 
controleAr.addCommand(desligarAr);
controleAr.addCommand(programarAr);
  
// Utilizando o controle remoto para chamar o comando que está na posição 0 do array que no caso é o ligar
controleAr.clicarBotao(0); 
// Utilizando o controle remoto para chamar o comando que está na posição 1 do array que no caso é o desligar
controleAr.clicarBotao(1);
// Utilizando o controle remoto para chamar o comando que está na posição 2 do array que no caso é o programar para desligar em 1 hora.
controleAr.clicarBotao(2);
controleAr.clicarBotao(3);

/*
Ar Condicionado ligou!
Ar Condicionado desligou!
Ar Condicionado irá desligar em 1 hora!
O número clicado/inserido é inválido, pois não existe esse comando no controle.
*/
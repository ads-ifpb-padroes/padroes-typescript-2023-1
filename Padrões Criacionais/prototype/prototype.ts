interface Prototype {
    clone(): Prototype;
    getProperty(): string;
    setProperty(value: string): void;
}

class ConcretePrototype implements Prototype {
    private property: string

    constructor(property: string){
        this.property = property
    }

    public clone(): Prototype {
        return new ConcretePrototype(this.property)
    }
    public setProperty(value: string): void {
        this.property = value
    }
    public getProperty(): string {
        return this.property
    }
}

const prototype = new ConcretePrototype('Sou um clone e preciso de um clone!')
const clone1 = prototype.clone()
const clone2 = prototype.clone()

console.log(clone1.getProperty())//Output: Sou um clone e preciso de um clone!
console.log(clone2.getProperty())//Output: Sou um clone e preciso de um clone!

clone1.setProperty("Agora meu nome é Clone 1")
clone2.setProperty("Agora meu nome é Clone 2")

console.log(clone1.getProperty())//Output: Agora meu nome é Clone 1
console.log(clone2.getProperty())//Output: Agora meu nome é Clone 2

// const clone3 = prototype.clone()

// clone3.setProperty("Meu nome é Allan")

// const clone4 = clone3.clone()

// console.log(clone3.getProperty())
// console.log(clone4.getProperty())
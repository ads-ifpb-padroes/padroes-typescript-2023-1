function withIngredients(ingredients:string[]){
    return function(target: Function){
        target['ingredients'] = ingredients;
    }
}

@withIngredients(['coffee', 'milk', 'sugar'])
class Beverage{
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

console.log(Beverage['ingredients']);
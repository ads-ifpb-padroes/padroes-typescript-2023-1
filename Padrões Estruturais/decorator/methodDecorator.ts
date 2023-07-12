function addIngredient(ingredient: string){
    return function (target: any, propertyKey:string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]){
        console.log('Adicionando o ingrediente ${ingrediente} à receita...');
        return originalMethod.apply(this,args);
    };
    return descriptor;
    };
}

class Recipe {
    @addIngredient('Tomate')
    @addIngredient('Cebola')
    makePizza(){
        console.log('Preparando uma deliciosa pizza!');
    }
}

const recipe = new Recipe();
recipe.makePizza();

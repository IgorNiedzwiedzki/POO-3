import ICompanyFactory from "../company/interfaces/ICompanyFactory";
import IDrink from "../iFood/drink/interfaces/IDrink";
import IFood from "../iFood/food/interfaces/IFood"

export default class Client{

    private food :IFood;
    private drink : IDrink;

    constructor(factory : ICompanyFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    createDeliveryFood(): void{
        this.food.createDeliveryFood();
        this.drink.createDeliveryDrink();
    }

}
import IDrink from "../../iFood/drink/interfaces/IDrink";
import IFood from "../../iFood/food/interfaces/IFood";

export default interface ICompanyFactory{
    createDeliveryFood(): IFood;
    createDeliveryDrink(): IDrink;
}
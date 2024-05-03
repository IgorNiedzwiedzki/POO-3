import Beer from "../iFood/drink/Beer";
import IDrink from "../iFood/drink/interfaces/IDrink";
import Hamburguer from "../iFood/food/Hamburger";
import IFood from "../iFood/food/interfaces/IFood";
import ICompanyFactory from "./interfaces/ICompanyFactory";

export default class AiqFomeCompany implements ICompanyFactory{
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
    createDeliveryDrink(): IDrink {
        return new Beer();
    }

}
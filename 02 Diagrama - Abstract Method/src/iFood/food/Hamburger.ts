import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    createDeliveryFood(): void {
        this.getCargo();
        console.log("Pedido lido e sendo preparado!")
    }
    getCargo(): void{
        console.log("Food!");
    } 

}
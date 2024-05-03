import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    createDeliveryDrink(): void {
        this.getCargo();
        console.log("Bebida Enviada!")
    }
    getCargo(): void{
        console.log("Drink!");
    } 

}
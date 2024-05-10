enum Sauces{
    MOSTARDA,
    MAIONESE,
    KETCHUP

}
class Sauce {
    static MAIONESE(MAIONESE: any) {
        throw new Error("Method not implemented.");
    }
    private availableSauces: Sauce[];

    constructor() {
        this.availableSauces = [];
    }

    addSauce(sauce: Sauce): void {
        this.availableSauces.push(sauce);
    }

    removeSauce(sauce: Sauce): void {
        const index = this.availableSauces.indexOf(sauce);
        if (index !== -1) {
            this.availableSauces.splice(index, 1);
        }
    }

    listSauces(): void {
        console.log("Available sauces:");
        this.availableSauces.forEach(sauce => {
            console.log(sauce);
        });
    }
}

export default Sauces;
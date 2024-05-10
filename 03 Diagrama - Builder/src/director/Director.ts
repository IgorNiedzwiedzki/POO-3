import IBuilder from "../builder/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Director{

    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.MEAL);
        this.builder.setBread(Bread.BAGUETE);
        this.builder.setProtein(Protein.FRANGO);
        this.builder.setSalad(Salad.ALFACE)
        this.builder.addSauces(Sauces.MAIONESE);
        this.builder.addSauces(Sauces.KETCHUP);
    }


    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.VEGAN);
        this.builder.setBread(Bread.INTEGRAL);
        this.builder.setProtein(Protein.CARNEdeSOJA);
        this.builder.setSalad(Salad.ALFACE)
        this.builder.addSauces(Sauces.MAIONESE);
        this.builder.addSauces(Sauces.KETCHUP);
    }

}
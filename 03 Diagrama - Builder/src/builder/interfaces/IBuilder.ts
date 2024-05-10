import Bread from "../../components/Bread";
import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import SanduicheType from "../../components/SanduicheType";
import Sauces from "../../components/Sauces";
import Sanduiche from "../../products/Sanduiche";

export default interface Ibuilder{
    
    reset(): void;
    getSanduiche(): Sanduiche;
    setSanduicheType(value: SanduicheType);
    setBread(bread: Bread);
    setProtein(protein: Protein);
    setSalad(salad: Salad);
    addSauces(sauces: Sauces);

}
import SanduicheBuilder from "./builder/SanduicheBuilder";
import Director from "./director/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const sand : Sanduiche = builder.getSanduiche();
console.log("Montando Lanche: ");
console.log("Tipo:" +sand.sanduicheType);
console.log("Pão:" +sand.bread);
console.log("Proteina:" +sand.protein);
console.log("Salada:" +sand.salad);
console.log("Molhos:" +sand.sauces);

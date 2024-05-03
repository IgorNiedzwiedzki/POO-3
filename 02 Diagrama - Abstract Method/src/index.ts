import Client from "./clientes/client";
import AiqFomeCompany from "./company/AiqFomeCompany";
import Company from "./company/Company";
import IFoodCompany from "./company/IFoodCompany";
import ICompanyFactory from "./company/interfaces/ICompanyFactory";

const currentCompany = Company.IFOOD
let factory : ICompanyFactory;

switch(currentCompany){

    case Company.AIQFOME:
        factory = new AiqFomeCompany;
        break;

    case Company.IFOOD:
        factory = new IFoodCompany;
        break;

    default :
        console.log("Companhia não definida")
}

const client = new Client (factory);
client.createDeliveryFood();
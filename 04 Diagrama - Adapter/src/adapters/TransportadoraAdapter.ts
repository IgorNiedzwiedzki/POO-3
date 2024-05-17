import ICorreioPayment from "../correios/interfaces/ICorreioPayment";
import Transportadora from "../transportadora/Transportadora";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements ICorreioPayment{
    private token : Token;
    
    authToken(): Token {
       return new Token();
    }

    constructor(private transportadora: Transportadora){        
console.log("Adaptando Transportadora no Correio.")
    }

    correioPayment(): void {
        return this.transportadora.sendPayment();
    }

    correioReceive(): void {
        return this.transportadora.receivePayment();
    }   

}
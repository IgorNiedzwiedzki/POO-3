import Token from "../utils/Token";
import ItransportadoraPayment from "./interfaces/ItransportadoraPayment";

export default class Transportadora implements ItransportadoraPayment{
    
    private token : Token;
    
    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("Código de Rastreio: "+ this.token.getToken())
        console.log("Enviando via Transportadora");
    }
    receivePayment(): void {
        console.log("Recebido na Transportadora");
    }
}
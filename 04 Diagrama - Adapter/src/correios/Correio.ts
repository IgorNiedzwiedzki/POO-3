import Token from "../utils/Token";
import ICorreioPayment from "./interfaces/ICorreioPayment";


export default class Correio implements ICorreioPayment{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
   
    correioPayment(): void {
       this.token = this.authToken();
       console.log("TOKEN: "+ this.token.getToken())
       console.log("Enviando via Correio!");
    }
    
    correioReceive(): void {
       console.log("Recebendo na central dos correios!");
    }
}
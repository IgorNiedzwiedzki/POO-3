import Token from "../../utils/Token";

export default interface ItransportadoraPayment{
    
    authToken(): Token;
    sendPayment() : void;
    receivePayment() : void;
}
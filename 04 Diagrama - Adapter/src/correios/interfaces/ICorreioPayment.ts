import Token from "../../utils/Token";

export default interface ICorreioPayment{

    authToken() : Token;
    correioPayment() : void;
    correioReceive() : void;
}
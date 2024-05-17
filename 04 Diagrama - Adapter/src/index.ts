import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import ICorreioPayment from "./correios/interfaces/ICorreioPayment";
import Transportadora from "./transportadora/Transportadora";


const payment : ICorreioPayment = 
new TransportadoraAdapter(new Transportadora());

payment.correioPayment();
payment.correioReceive();

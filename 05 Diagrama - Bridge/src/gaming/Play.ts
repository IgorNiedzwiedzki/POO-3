import IConsole from "../consoles/interfaces/IConsole";
import IPlay from "./interfaces/IPlay";

export default class Play implements IPlay {
    constructor(private gameConsole: IConsole) {}

    playing(): void {
        console.log("Iniciando a Transmissão!");
        this.gameConsole.configureGame(); // Chamando o método configureGame da interface IConsole
    }

    result(): void {
        console.log("***** No Ár **********");
        console.log("\\--\\\\--\\\\--\\\\--\\\\--\\\\--\\\\--\\\\--\\\\--\\\\--\\\\--\\\\--\\");
    }
}


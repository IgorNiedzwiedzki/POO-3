import IMedia from "./interfaces/IMedia";

export default class Game implements IMedia{
    startItem(): void {
        throw new Error("Method not implemented.");
    }
    protected createItem(): IMedia {
        throw new Error("Method not implemented.");
    }

    start(): void {
        this.getDescription();
        console.log("Game: Iniciando Game!")
    }

    getDescription(): void {
        console.log("Game: Fall Out!")
    }
}
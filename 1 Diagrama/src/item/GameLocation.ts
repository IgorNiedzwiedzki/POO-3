import Item from "./Item";
import Game from "./venda/Game";
import IMedia from "./venda/interfaces/IMedia";

export default class extends Item{
    protected createItem(): IMedia {
        return new Game();
    }
}
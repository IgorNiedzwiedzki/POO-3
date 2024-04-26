import Item from "./Item";
import Game from "./venda/Game";
import Movie from "./venda/Movie";
import IMedia from "./venda/interfaces/IMedia";

export default class extends Item{
    protected createItem(): IMedia {
        return new Movie();
    }
}
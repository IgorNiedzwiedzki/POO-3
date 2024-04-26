import IMedia from "./venda/interfaces/IMedia";

export default abstract class Item{

    startItem(): void{
        const media = this.createItem();
        media.start();
    }

    protected abstract createItem(): IMedia;
}
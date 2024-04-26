import IMedia from "../Item";

export default class Movie implements IMedia{

    start(): void {
        this.getDescription();
        console.log("Movie: Iniciando Filme!")
    }

    getDescription(): void {
        console.log("Movie: Livro de Eli!")
    }
}
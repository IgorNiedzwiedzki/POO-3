import GameLocation from "./item/GameLocation";
import Item from "./item/Item";
import MovieLocation from "./item/MovieLocation";

declare var process;
let media: Item;


if(process.argv.includes("game")){
    media = new GameLocation();
}else if (process.argv.includes("movie")){
    media = new MovieLocation();
}else {
    console.log("Selecione o tipo de Midia!")
}

if(media) media.startItem();
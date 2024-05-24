import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./gaming/AdvancedPlay";
import Play from "./gaming/Play";

function startPlay(gameConsole: IConsole) {
    console.log("Aguarde....");
    const play = new Play(gameConsole);
    play.playing();
    play.result();
}



function startAdvancedPlay(gameConsole: IConsole) {
    console.log("Aguarde o jogo Avançado....");
    const advancedPlay = new AdvancedPlay(gameConsole);
    advancedPlay.playing();
    advancedPlay.result();
    advancedPlay.challenge();
}

startPlay(new PlayStation());
startPlay(new XBox());

startAdvancedPlay(new PlayStation());
startAdvancedPlay(new XBox());
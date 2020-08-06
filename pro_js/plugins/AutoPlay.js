class AutoPlay{
    constructor(){}
    run(player){
        player.mute();
        player.play();
    }
}
//Ejemplo en Platzi, pero menos legible
// function AutoPlay(){}
// AutoPlay.prototype.run = function(player){
//     player.mute();
//     player.play();
// }

export default AutoPlay
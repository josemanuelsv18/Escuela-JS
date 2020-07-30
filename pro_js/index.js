const video = document.querySelector("video");
const button = document.querySelector("button");

//así se usa en el curso, pero es más complicado
/*function MediaPlayer(config){
    this.media = config.el;
}
MediaPlayer.prototype.playPause = function() {
    if(this.media.paused){
        this.media.play();
    }else{
        this.media.pause()
    }
};*/

//Usando el constructor es más legible
class MediaPlayer {
    constructor(config){
        this.media = config.el;
    }
    playPause(){
        if(this.media.paused){
            this.media.play();
        }else{
            this.media.pause()
        } 
    }
}

const player = new MediaPlayer({el: video});

button.onclick = () => player.playPause();
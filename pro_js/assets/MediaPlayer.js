//así se usa en el curso, pero es más complicado
// function MediaPlayer(config){
//     this.media = config.el;
//     this.plugins = config.plugins || [];

//     this._initPlugins();
// }
// MediaPlayer.prototype._initPlugins = function(){
//     this.plugins.forEach(plugin => {
//         plugin.run(this.media)
//     });
// }
// MediaPlayer.prototype.pause = function(){
//     this.media.pause();
// }
// MediaPlayer.prototype.play = function(){
//     this.media.play();
// }
// MediaPlayer.prototype.mute = function(){
//     this.media.muted = true;
// }
// MediaPlayer.prototype.unmute = function(){
//     this.media.muted = false;
// }
// MediaPlayer.prototype.playPause = function() {
//     if(this.media.paused){
//         this.play();
//     }else{
//         this.pause()
//     }
// };

//Usando el constructor es más legible
class MediaPlayer {
    constructor(config){
        this.media = config.el;
        this.plugins = config.plugins || [];
        
        this._initPlugins()
    }
    play(){
        this.media.play();
    }
    pause(){
        this.media.pause();
    }
    mute(){
        this.media.muted = true;
    }
    unmute(){
        this.media.muted = false;
    }
    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }
    playPause(){
        if(this.media.paused){
            this.play();
        }else{
            this.media.pause();
        }
    }
    toggleMute(){
        if(this.media.muted){
            this.unmute();
        }else{
            this.mute();
        }
    }
}

export default MediaPlayer